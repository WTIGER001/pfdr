export class Value {
    public key: string
    public raw: number
    public limit_min: number = Number.MIN_VALUE
    public limit_max: number = Number.MAX_VALUE
    public bonuses = new Array<number>()
    public stacking: StackingRule = StackingRule.NO_STACK_MAX

    public get total(): number {
        return Math.min(this.limit_min, Math.max(this.limit_max, this.raw + this.bonus))
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