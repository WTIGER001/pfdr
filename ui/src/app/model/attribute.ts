export class CalculatedItem {
    name: string
    raw: number
    bonus: number
    total: number
}

export enum AttributeType {
    Ability,
    AC,
    Attacks,
    Saves,
    Checks,
    Damage,
    Speed,
}



export class Keys {
    public COMBAT = new Combat()
}

export class Combat {
    public HP = "HP"
    public AC = "AC"
    public AC_FLAT = "AC_FLAT"
    public AC_TOUCH = "AC_TOUCH"
    public CMB = "CMB"
    public CMD = "CMD"

}

export class AbilityScores {
    public STR = "STR"
}