import { Injectable } from '@angular/core';
import { Character, ClassLevel, Value, CompositeValue, RuleBook, Target, Subtarget, StackingRule } from './model'
import { Ability } from './model/character'
import { Formula } from './model/formula'
import { Collector, Warning, SEVERITY } from './model/calc/calcEffects'
import { ClassDef, ClassLevelDef } from './model/ref/classDef'
import { SkillDef } from './model/ref/skillDef'
import { EffectDef, EffectType } from './model/ref/effectDef'
import { ExAbility } from './model/ref/extraordinary'
import { DbService } from './db.service'

@Injectable()
export class EngineService {
  rules: RuleBook
  sources = new Array<(chr: Character, collector: Collector) => any>()
  functions = new Map<string, { (): number }>()

  constructor(private db: DbService) {
    this.addEffectSource(this.fromRace)
    this.addEffectSource(this.fromAbilityScores)
    this.addEffectSource(this.fromTraits)
    this.addEffectSource(this.fromClassLevels)
    this.addEffectSource(this.fromFeats)
    this.addEffectSource(this.fromArmor)
    this.addEffectSource(this.fromWeapons)
    this.addEffectSource(this.fromGear)
    this.addEffectSource(this.fromConditions)
    this.addEffectSource(this.fromSpells)
  }

  public addEffectSource(fn: (chr: Character, collector: Collector) => any) {
    this.sources.push(fn)
  }

  public addComputeFunction(name: string, fn: { (): number }) {
    this.functions.set(name, fn)
  }

  public evaluateFormula(chr: Character, formula: Formula): number {
    let varValues = new Map<string, number>()
    let arrValues = new Map<string, Array<number>>()
    let fnValues = new Map<string, { (): number }>()

    // Get the necessary variables
    formula.vars.forEach(name => {
      let x = chr.cache.values.get(name)
      if (x == undefined) {
        // OOPS
        console.log("Missing Variable [" + name + "] skipping calculation");
        return NaN
      }
      varValues.set(name, x.total)
    });

    // Get the array values
    formula.arrays.forEach(name => {
      let x = this.db.getNamedArrays().get(name)
      if (x == undefined) {
        // OOPS
        console.log("Missing Named Array [" + name + "] skipping calculation");
        return NaN
      }
      arrValues.set(name, x)
    });

    // Get the Functions
    formula.functions.forEach(name => {
      let x = this.functions.get(name)
      if (x == undefined) {
        // OOPS
        console.log("Missing Named Function [" + name + "] skipping calculation");
        return NaN
      }
      fnValues.set(name, x)
    })

    let result = formula.evaluate(varValues, arrValues, fnValues)
    console.log("Formula Evaluation: " + formula.formula + " => " + result)

    return result
  }

  public getTargetValue(chr: Character, key: string) {
    let x = chr.cache.values.get(name)
    if (x == undefined) {
      // Maybe the calculations have not been run
      this.calculate(chr)
      x = chr.cache.values.get(name)
      if (x == undefined) {
        // NOPE ERROR
        return NaN
      }
    }
    return x
  }

  /**
   * Calculate takes the inputs 
   */
  public calculate(c: Character) {
    // Collect all the effects
    const collector = this.collectEffects(c)

    // Order
    collector.sort()

    // Create a new Cache
    c.cache.values.clear()

    // Iterate
    collector.effects.forEach(effect => {

      // Evaluate the Effect
      let x = this.evaluateFormula(c, effect.formula)

      // Store the result
      let v = c.cache.values.get(effect.target)
      if (v == undefined) {
        v = new Value()
        v.key = effect.target.toLowerCase()
        let parts = v.key.split(".")
        if (parts.length == 1) {
          let tgt = this.db.targets.get(v.key)
          if (tgt == undefined) {
            // BAD
          }

          // Evaluate
          v.raw = this.evalProperty(c, tgt.raw)
          const stack: StackingRule | undefined = (<any>StackingRule)[tgt.stacking.toUpperCase()];
          if (stack !== undefined) {
            //TSC will understand that mayBeColor of type Color here
            v.stacking = stack
          }
        } else {
          let sub = this.db.subtargets.get(parts[parts.length - 1])
          if (sub == undefined) {
            // BAD
          }
          const stack: StackingRule | undefined = (<any>StackingRule)[sub.stacking.toUpperCase()];
          if (stack !== undefined) {
            //TSC will understand that mayBeColor of type Color here
            v.stacking = stack
          }
        }
        c.cache.values.set(v.key, v)
      }

      v.bonuses.push(x)
    });

    this.calcEffectsfromAbilities(c)
  }


  public evalProperty(character: Character, prop: string): number {
    let x = eval(prop)
    return x
  }

  public calcEffectsfromAbilities(c: Character) {
    c.abilities.forEach((v: Ability, k: string) => {

    });
  }

  public collectEffects(c: Character): Collector {
    const coll = new Collector();

    this.sources.forEach(fn => {
      fn(c, coll)
    });

    return coll;
  }

  private fromAbilityScores(chr: Character, coll: Collector) {
    chr.abilities.forEach((v: Ability, k: string) => {
      let e = new EffectDef();
      e.target = v.abbr + "_mod"
      e.bonus = ""


      coll.add(new EffectDef(
    });
  }

  private fromRace(chr: Character, coll: Collector) {

  }

  private fromSpells(chr: Character, coll: Collector) {

  }

  private fromWeapons(chr: Character, coll: Collector) {

  }

  private fromTraits(chr: Character, coll: Collector) {

  }

  private fromArmor(chr: Character, coll: Collector) {

  }
  private fromGear(chr: Character, coll: Collector) {

  }
  private fromFeats(chr: Character, coll: Collector) {

  }

  private fromConditions(chr: Character, coll: Collector) {

  }

  private fromClassLevels(chr: Character, coll: Collector) {
    chr.levels.forEach(level => {
      this.fromClassLevel(level, coll)
    });
  }

  /**
   * Calculate all the effects of a provided class level
   * @param level 
   */
  private fromClassLevel(level: ClassLevel, c: Collector) {
    // HP
    if (level.hp > 0) {
      let e = new EffectDef()
      e.target = "HP"
      e.bonus = String(level.hp)
      c.add(e)
    } else {
      c.add(new Warning(SEVERITY.SERIOUS, "No HP entered", "HP"))
    }

    // Get the class reference
    let cd: ClassDef = this.rules.getClassDef(level.pcClass)
    if (cd == undefined) {
      c.add(new Warning(SEVERITY.CRITICAL, "No Class Definition found for " + level.pcClass))
      return
    }
    let cldef = cd.getClassLevelDef(level.level)

    // Get the class bonuses / effects
    cldef.bonuses.forEach(e => {
      c.add(e)
    });

    // Get the effects of the extraordinary abilities
    cldef.abilities.forEach(exName => {
      let ex = cd.getExAbility(exName)
      ex.effects.forEach(e => {
        c.add(e)
      });
    });
  }

  private getMod(score: number) {
    const MOD = [
      -6,
      -5,
      -4,
      -4,
      -3,
      -3,
      -2,
      -2,
      -1,
      -1,
      0,
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
      13
    ]
    return MOD[score]
  }

}