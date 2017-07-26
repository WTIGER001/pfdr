import { isNumeric } from 'rxjs/util/isNumeric'
import { Formula } from '../formula'

export class EffectDef {
    public target: string
    public desc?: string
    private _bonus: string
    public effect_type: EffectType = EffectType.BONUS
    public user_selection: UserSelection
    public max_bonus: number
    public min_bonus: number
    public when: string
    public special: string
    public formula: Formula

    public set bonus(b: string) {
        this._bonus = b
        this.formula = new Formula(b)
    }

    public fromJson(o: EffectDef): EffectDef {
        Object.assign(this, o)
        return this
    }
}

export class UserSelection {
    public count: number = 1
    public choices: string[]
}

export enum EffectType {
    SKILL_RANKS_REPLACED,
    BONUS,
    LIMIT
}