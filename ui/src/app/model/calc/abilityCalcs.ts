import { CalcResult, CalcResultElement } from '../calcResult'

export enum StackingRule {
    NO_STACK_MAX, NO_STACK_MIN, STACK
}

export class Stack {
    public key: String
    public method: StackingRule = StackingRule.STACK

    public evaluate(results: CalcResult[]): CalcResult {
        switch (this.method) {
            case StackingRule.STACK:
                let sum = 0
                let sumR = new CalcResult()
                for (let i = 0; i < results.length; i++) {
                    sum += results[i].total
                }
                sumR.total = sum
                return sumR
            case StackingRule.NO_STACK_MIN:
                let minR = new CalcResult()
                let min = 0
                for (let i = 0; i < results.length; i++) {
                    if (i == 0) {
                        min = results[i].total
                    } else {
                        min = Math.min(min, results[i].total)
                    }
                }
                minR.total = min
                return minR
            case StackingRule.NO_STACK_MAX:
                let maxR = new CalcResult()
                let max = 0
                for (let i = 0; i < results.length; i++) {
                    if (i == 0) {
                        max = results[i].total
                    } else {
                        max = Math.max(max, results[i].total)
                    }
                }
                maxR.total = max
                return maxR
        }
        return null
    }
}