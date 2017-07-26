import { Armor } from '../armor'
import { EffectDef } from '../ref/effectDef'

export class Collector {
    effects = new Array<EffectDef>()
    warnings = new Array<Warning>()

    public add(effect: Warning | EffectDef) {
        if (effect instanceof EffectDef) {
            this.effects.push(effect)
        } else if (effect instanceof Warning) {
            this.warnings.push(effect)
        } else {
            throw "Illegal Type " + JSON.stringify(effect)
        }
    }

    public sort() {

    }

}

export enum SEVERITY {
    CRITICAL,
    SERIOUS,
    MINOR
}

export class Warning {
    constructor(public severity: SEVERITY, public desc: string, public attrKey: string = "GLOBAL") { }
}

