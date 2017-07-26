import { EffectDef } from './effectDef'

export class ExAbility {
    public name: string
    public description: string
    public effects: EffectDef[]

    public fromJson(o: ExAbility): ExAbility {
        Object.assign(this, o)

        this.effects.splice(0, this.effects.length)
        o.effects.forEach(other => {
            this.effects.push(new EffectDef().fromJson(other))
        });

        return this
    }
}