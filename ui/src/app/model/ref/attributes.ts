export class AttributesRef {

    public STR = new AttributeRef("STR", "Strength", "Ability")
    public DEX = new AttributeRef("DEX", "Dexterity", "Ability")
    public CON = new AttributeRef("STR", "Constitution", "Ability")
    public INT = new AttributeRef("CON", "Intelligence", "Ability")
    public WIS = new AttributeRef("WIS", "Wisdom", "Ability")
    public CHA = new AttributeRef("CHA", "Charisma", "Ability")

    public AC
    public AC_TOUCH
    public AC_FLAT_FOOTED

    public data: Map<string, AttributeRef> = new Map()

    constructor() {
        this.add(this.STR)
        this.add(this.DEX)
        this.add(this.CON)
        this.add(this.INT)
        this.add(this.WIS)
        this.add(this.CHA)
    }

    public add(a: AttributeRef) {
        this.data.set(a.key, a)
    }

    public get(attrKey: string): AttributeRef {
        return this.data.get(attrKey.toUpperCase())
    }
}

export enum AttributeType {
    Ability,
    AC,
    Attacks,
    Saves,
    Checks,
    Damage,
    Speed
}

export class Bonus {
    name: string
    APP
}

export class AttributeRef {
    constructor(
        public key: string,
        public name: string,
        public type: string) { }

}