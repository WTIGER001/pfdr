import { Value, CompositeValue, Values } from './value'
import { EffectDef } from '../model/ref/effectDef'
import { SkillDef } from '../model/ref/skillDef'

export class Character {
    public id: string
    public values = new Values()
    // public abilities = new Abilities()
    public personal = new PersonalInfo()
    public levels: ClassLevel[] = new Array
    public skills: Skill[] = new Array()
    public feats = ""
    public conditions = ""
    public specialAbilities = ""

    // Equipment
    public weapons = ""
    public armor = ""
    public gear = ""
    public compainions = ""
    public money = ""

    public manual = new Array<EffectDef>()
}

export class Skills {
    public skills: Skill[] = new Array()
}

export class Skill extends Value {
    public name: string
    public source: string
    public acp: boolean
    public ability: string
    public untrained: boolean
    public category: boolean
    public choice: string

    public fromDef(skl: SkillDef): Skill {
        this.name = skl.name
        this.acp = skl.acp
        this.ability = skl.ability
        this.category = skl.category
        this.untrained = skl.untrained

        return this
    }
}

export class ClassLevel {
    pcClass: string
    hp: number
    level: number
    favoredClassSelection: string
}

export class Classes {

}

export class PersonalInfo {
    public name: string
    public race: string
    public diety: string
    public homeland: string
    public background: string
    public eye: string
    public skin: string
    public weight: number //LBS
    public age: number // YEARS
    public height: number //INCHES
    public gender: string
    public alignment: string
    public handed: string
    public picture: string
}