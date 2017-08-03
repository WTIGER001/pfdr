import { EffectDef } from './effectDef'

export class Race {
    public name: string
    public size: string
    public type: string
    public subtype: string
    public speed: number
    public languages: string[]
    public language_choices: string[]
    public effects: EffectDef[]
    public subtypes: any[]
    public favored_classes: any[]
    public racial_archetypes: any[]
    public racial_feats: any[]

    public fromJson(o: Race): Race {
        Object.assign(this, o)
        this.effects = new Array<EffectDef>()
        if (o.effects) {
            for (let i = 0; i < o.effects.length; i++) {
                this.effects.push(new EffectDef().fromJson(o.effects[i]))
            }
        }
        return this
    }
}