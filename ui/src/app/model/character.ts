export class Character {
    public id: string
    public abilities
    public personal = new PersonalInfo()
    public levels: ClassLevel[] = new Array
    public skills: Skills = new Skills()
    public feats
    public conditions
    public specialAbilities

    // Equipment
    public weapons
    public armor
    public gear
    public compainions
    public money
}



export class Skills {

}

export class ClassLevel {
    pcClass: string
    hp: number
    level: number
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