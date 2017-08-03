import { ClassDef } from './classDef'
import { SkillDef } from './skillDef'
import { EffectDef } from './effectDef'

export class RuleBook {

    public skills = new Map<string, SkillDef>()
    public classes = new Map<string, ClassDef>()

    public getSkill(name: String) {

    }

    public getSkillsForAbilty(ability: string) {

    }

    public getClassDef(classKey: string) {
        return this.classes.get(classKey.toLowerCase());
    }

    public add(item: ClassDef | SkillDef) {
        if (item instanceof ClassDef) {
            this.classes.set(item.name.toLowerCase(), item)
        } else if (item instanceof SkillDef) {
            this.skills.set(item.name.toLowerCase(), item)
        }

    }
}

export class Rule {
    public name: string
    public effects: EffectDef[]

    public fromJson(o: Rule): Rule {
        Object.assign(this, o)
        this.effects = new Array<EffectDef>()
        if (o.effects) {
            for (let i = 0; i < o.effects.length; i++) {
                this.effects.push(new EffectDef().fromJson(o.effects[i]))
            }
        }
        return this
    }
}

export class Target {
    public key: string
    public type: string
    public desc?: string = "None Provided"
    public stacking: string
    public raw: number = 0
}

export class Subtarget {
    public key: string
    public type: string
    public desc?: string = "None Provided"
    public stacking: string
    public url?: string
    public raw: number = 0
    public targets: string[]
}

export class NamedArray {
    public name: String
    public values: number[]
}