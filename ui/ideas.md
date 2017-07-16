
# Ideas

- Use formulas and DSL to define rules. Possibly include a scripting language. 

For example: 

Barbarian Animal Fury
Effect: {
    additional attack: {
        tohit: (BAB -5), 
        dmg: {
           select size: 
            case sm: 1d3,
            case med: 1d4,
            case lg: 1d6
        }

}