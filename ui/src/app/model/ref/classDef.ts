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
    public extraordinary_abilities: ExAbility[]
    public replaced_abilities: string[]

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
}

export class ClassLevelDef {
    public rank: number
    public skillPoints: number
    public bonuses: EffectDef[]
    public abilities: string[]
    public feats: string[]
}

export enum ClassType {
    BASE,
    ARCHETYPE,
    PRESTIGE
}

