export class Armor {
    // Normal Attributes
    public name: string
    public cost: string
    public bonus: number
    public max_dex: number
    public acp: number
    public spell_fail: number
    public speed_30: string
    public speed_20: string
    public weight: string
    public source: string
    public armor_type: string

    // Additional Abilites
    public masterwork: boolean = false

    // Magic
    public magic: boolean = false
    public enchantment: number = 0
}