// Descripes a calcuation result
export class CalcResult {
    public elements: CalcResultElement[] = new Array()
    public total: number
}

export class CalcResultElement {
    constructor(
        public value: number,
        public name: string,
        public description: string,
        public showPlus: boolean = true) { }
}