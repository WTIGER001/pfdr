import { ClassDef } from './classDef'
import { SkillDef } from './skillDef'

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

export interface IRule {
    name: string
    definition: string
    source: string
}

export class Target {
    public key: string
    public type: string
    public desc?: string = "None Provided"
    public stacking: string
    public raw?: string = "0"
}

export class Subtarget {
    public key: string
    public type: string
    public desc?: string = "None Provided"
    public stacking: string
    public url?: string
    public targets: string[]
}

export class NamedArray {
    public name: String
    public values: number[]
}