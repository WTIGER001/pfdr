import { Value, CompositeValue, Values } from './value'
import { EffectDef } from '../model/ref/effectDef'

export class Character {
    public id: string
    public values = new Values()
    // public abilities = new Abilities()
    public personal = new PersonalInfo()
    public levels: ClassLevel[] = new Array
    public skills: Skills = new Skills()
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

// export class Abilities {
//     private data = new Map<string, Ability>()
//     constructor() {
//         this.set("str", this.STR);
//         this.set("dex", this.DEX);
//         this.set("con", this.CON);
//         this.set("int", this.INT);
//         this.set("wis", this.WIS);
//         this.set("cha", this.CHA);
//     }

//     public items(): Map<string, Ability> {
//         return this.data
//     }
//     public set(k, v) {
//         this.data.set(k, v)
//     }
//     public get(k: string): Ability {
//         return this.data.get(k)
//     }
//     public STR = new Ability("Strength", "STR")
//     public DEX = new Ability("Dexterity", "DEX")
//     public CON = new Ability("Constitution", "CON")
//     public WIS = new Ability("Wisdom", "WIS")
//     public INT = new Ability("Intelligence", "INT")
//     public CHA = new Ability("Strength", "CHA")

// }

// export class Ability {
//     public raw: number
//     public mod: number
//     public val: number
//     constructor(public name: String, public abbr) {

//     }
// }


export class Skills {
    public skills: Skill[] = new Array()
}

export class Skill {
    public name: string
    public source: string
    public rank: number
    public isClassSkill: boolean
    public isACP: boolean
    public miscMod: number
    public ablility: string
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