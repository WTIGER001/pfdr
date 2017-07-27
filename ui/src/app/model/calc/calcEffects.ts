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
        this.effects.sort((a, b) => {

            let result = 0

            // IF A has a dependency on a variable B then A is greater than b
            // IF B has a dependency on a variable A then B is greater than b
            // IF A is a subtarget of B then B is greater
            // IF B is a subtarget of A then A is greater
            if (a.formula.vars.includes(b.target)) {
                result = 1
            } else if (b.formula.vars.includes(a.target)) {
                result = -1
            } else {
                let partsA = a.target.split(".")
                let partsB = a.target.split(".")

                if (partsA.length == 1 && partsB.length == 1) {
                    // Nothing
                } else if (partsA.length == 2 && partsB.length == 2) {
                    // Nothing
                } else if (partsA.length == 1 && partsB.length == 2) {
                    if (partsA[0] === partsB[0]) {
                        return 1
                    }
                } else if (partsA.length == 2 && partsB.length == 1) {
                    if (partsA[0] === partsB[0]) {
                        return -1
                    }
                }
            }

            console.log("Comparing " + a.target + " AND " + b.target + " RESULT " + result);

            return result
        })

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

