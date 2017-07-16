// A barbarian’s land speed is faster than the norm for her race by +10 feet. 
//  This benefit applies only when he is wearing no armor, light armor, or 
//  medium armor, and not carrying a heavy load. Apply this bonus before modifying 
//  the barbarian’s speed because of any load carried or armor worn. This bonus stacks
//   with any other bonuses to the barbarian’s land speed."

enum AbiltyType {
    Feat = 0,
    EX
}

export class Feat {
    type: AbiltyType
    name: string
    effect: string
    applies: string




    make(): Feat {
        let f = new Feat()
        f.type = AbiltyType.EX
        f.name = "Fast Movement (Ex)"
        f.effect = "LAND_SPEED + 10"
        f.applies = "(Armor:None|Armor:Light|Armor:Medium)&!Enumberance:Heavy"

        return f
    }
}

