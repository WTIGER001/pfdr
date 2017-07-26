import { EffectDef } from './effectDef'
import { ExAbility } from './extraordinary'

export class ClassDef {
    public name: string
    public base_class: string
    public type: ClassType
    public description: string
    public hit_die: string
    public starting_wealth: string
    public class_skills: string[] = new Array()
    public skill_ranks_per_level: number
    public feats: string[]
    public levels = new Array<ClassLevelDef>()
    public extraordinary_abilities = new Array<ExAbility>()
    public replaced_abilities = new Array<String>()

    public getClassLevelDef(rank: number) {
        return this.levels[rank]
    }
    public getExAbility(name: string): ExAbility {
        this.extraordinary_abilities.forEach(ex => {
            if (ex.name.toLowerCase() === name.toLowerCase()) {
                return ex
            }
        });
        return undefined
    }

    public fromJson(c: ClassDef): ClassDef {
        Object.assign(this, c)

        this.levels = new Array<ClassLevelDef>()
        this.extraordinary_abilities = new Array<ExAbility>()

        if (c.levels) {
            c.levels.forEach(o => {
                this.levels.push(new ClassLevelDef().fromJson(o))
            })
        }
        if (c.extraordinary_abilities) {
            c.extraordinary_abilities.forEach(o => {
                this.extraordinary_abilities.push(new ExAbility().fromJson(o))
            })
        }

        return this
    }
}

export class ClassLevelDef {
    public rank: number
    public skillPoints: number
    public bonuses = new Array<EffectDef>()
    public abilities: string[]
    public feats: string[]

    public fromJson(o: ClassLevelDef): ClassLevelDef {
        Object.assign(this, o)

        this.bonuses.splice(0, this.bonuses.length)

        if (o.bonuses) {
            o.bonuses.forEach(other => {
                this.bonuses.push(new EffectDef().fromJson(other))
            });
        }

        return this
    }
}

export enum ClassType {
    BASE,
    ARCHETYPE,
    PRESTIGE
}

