export class Sizes {
    public Fine: Size = new Size(0, "Fine", 8, -8, 8, 16, .5, 0, 0, 6, 0, 1 / 8)
    public Diminutive: Size = new Size(1, "Diminutive", 4, -4, 6, 12, 1, 0, 6, 12, 1 / 8, 1)
    public Tiny: Size = new Size(2, "Tiny", 2, -2, 4, 8, 2.5, 0, 1, 2, 1, 8)
    public Small: Size = new Size(3, "Small", 1, -1, 2, -4, 5, 5, 2, 4, 8, 60)
    public Medium: Size = new Size(4, "Medium", 0, 0, 0, 0, 5, 5, 4, 8, 60, 500)
    public Large: Size = new Size(5, "Large", -1, 1, -2, -4, 10, 10, 8, 16, 500, 4000)
    public Large_Long: Size = new Size(5, "Large (long)", -1, 1, -2, -4, 10, 5, 8, 16, 500, 4000 * 2)
    public Huge: Size = new Size(6, "Huge", -2, 2, -4, -8, 15, 15, 16, 32, 2000 * 2, 16000 * 2)
    public Huge_Long: Size = new Size(6, "Huge (long)", -2, 2, -4, -8, 15, 10, 16, 32, 2000 * 2, 16000 * 2)
    public Gargantuan: Size = new Size(7, "Gargantuan", -4, 4, -6, -12, 20, 20, 32, 64, 16000 * 2, 125000 * 2)
    public Gargantuan_Long: Size = new Size(7, "Gargantuan (long)", -4, 4, -6, -12, 20, 15, 32, 64, 16000 * 2, 125000 * 2)
    public Colossal: Size = new Size(8, "Colossal", -8, 8, -8, -16, 30, 30, 64, 999, 125000 * 2, 999999)
    public Colossal_Long: Size = new Size(8, "Colossal (long)", -8, 8, -8, -16, 30, 20, 64, 999, 125000 * 2, 999999)

    public getByRank(rank: number): Size {
        switch (rank) {
            case 0: return this.Fine;
            case 1: return this.Diminutive;
            case 2: return this.Tiny;
            case 3: return this.Small;
            case 4: return this.Medium;
            case 5: return this.Large;
            case 6: return this.Huge;
            case 7: return this.Gargantuan;
            case 8: return this.Colossal;
        }
        return undefined
    }

    public increment(currentSize: Size, value: number): Size {
        if (currentSize.rank == 0 && value <= 0) {
            return currentSize
        } else if (currentSize.rank == 8 && value >= 8) {
            return currentSize
        } else {
            let newRank = currentSize.rank + value
            return this.getByRank(newRank)
        }
    }
}

export class Size {
    constructor(
        public rank: number,
        public size: string,
        public sizeMod: number,
        public sizeModSpecial: number,
        public flyMod: number,
        public stealthMod: number,
        public space: number,
        public naturalReach: number,
        public typicalHeightMin: number,
        public typicalHeightMax: number,
        public typicalWeightMin: number,
        public typicalWeightMax: number) { }
}