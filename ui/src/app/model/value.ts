export class Value {
    public key: string
    public type: string
    public raw: number
    public limit_min: number = NaN
    public limit_max: number = NaN
    public bonuses = new Array<number>()
    public stacking: StackingRule = StackingRule.NO_STACK_MAX

    public get total(): number {
        let t = Number(this.raw) + Number(this.bonus)
        if (isNaN(this.limit_max) == false) {
            t = Math.max(this.limit_max, t)
        }
        if (isNaN(this.limit_min) == false) {
            t = Math.max(this.limit_min, t)
        }
        return t
    }

    public get bonus(): number {
        switch (this.stacking) {
            case StackingRule.STACK:
                let sum = 0
                for (let i = 0; i < this.bonuses.length; i++) {
                    sum += this.bonuses[i]
                }
                return sum
            case StackingRule.NO_STACK_MIN:
                let min = 0
                for (let i = 0; i < this.bonuses.length; i++) {
                    if (i == 0) {
                        min = this.bonuses[i]
                    } else {
                        min = Math.min(min, this.bonuses[i])
                    }
                }
                return min
            case StackingRule.NO_STACK_MAX:
                let max = 0
                for (let i = 0; i < this.bonuses.length; i++) {
                    if (i == 0) {
                        max = this.bonuses[i]
                    } else {
                        max = Math.max(max, this.bonuses[i])
                    }
                }
                return max
        }
        return NaN
    }
}

export class CompositeValue extends Value {

    public values = new Array<Value>()

    public get total(): number {
        let subValue = 0
        this.values.forEach(element => {
            subValue += element.total
        });

        return Math.min(this.limit_min, Math.max(this.limit_max, this.raw + this.bonus + subValue))
    }
}


export enum StackingRule {
    NO_STACK_MAX, NO_STACK_MIN, STACK
}

export class Values implements Iterable<Value> {
    public _vals = new Map<string, Value>()

    public get(key: string) {
        return this._vals.get(key.toLowerCase())
    }

    public set(v: Value) {
        this._vals.set(v.key.toLowerCase(), v)
    }

    public forEach(fn: { (v: Value): void }) {
        this._vals.forEach(fn);
    }

    public clearBonuses() {
        this._vals.forEach(v => {
            v.bonuses.splice(0, v.bonuses.length)
        });
    }

    public getTypes(): string[] {
        let a = new Map<string, string>()

        this._vals.forEach(v => {
            a.set(v.type, v.type)
        });

        let b = new Array<string>()
        a.forEach((v, k) => {
            b.push(k)
        })

        return b
    }

    public getType(type: string): Value[] {
        let a = new Array<Value>()
        this._vals.forEach(v => {
            if (v.type.toLocaleLowerCase() == type.toLocaleLowerCase()) {
                a.push(v)
            }
        });
        return a
    }

    [Symbol.iterator]() {
        let it = this._vals.values();
        return {
            next(): IteratorResult<Value> {
                return it.next()
            }

        }
    }
}