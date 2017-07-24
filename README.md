# pfdr

## Calculation Sub-System

The way the classification subsystem works is based on the concept of formulas and dependant calculations. 

A calculation uses RAW or CALCULATED values to compute a composite value. That composite value can be 
used in subsequent calculations. For example: 

DEX = DEX_RANK + modifiers
DEX_MOD = MIN(Armor_Max_Dex, Dex_mod_raw + dex_mods)

In both examples a composite value is calculated based on other values. Some of these other values are raw values (just number in a look up) and some values are themselves calculated. This means that we need to identify the values and their dependancies

We have the concept then of a calculation. A calculation has the following attributes
* Key - A unique key or variable name that is used to identify this value. 
* Name - The simple name for a value that can be shown to the user
* Description - An optional description of the value
* URL - A URL to the full description (e.g. http://www.d20pfsrd.com)
* Values Needed / Dependencies
* Evaluation

The Calculation sub system should function as follows.
1.) Sort the calculation by the variables needed (so the independant variables are first)
2.) Evaluate the calculations in order

Types of calculations in the code. 
* Custom
* Formula / Expression (These can be loaded from file)
* Collector (Sum, Min, Max)

## Calculations

Fundamentally attributes are calcualted by starting with a raw value (sometimes 0 ) and applying bonuses and limits. Bonues can be cumulative or only the largest or smallest bonus will apply. There can be different types of bonuses (AC for example) and each bonus type can have a different stacking rule.

Some calculations provide BONUSES. Some BONUSES Stack while others simply choose the largest to apply
Some calculations provide LIMITS

### Ability and Abilty Mods
Each ablity score has an effective value, a raw value and a mod value. 

* **Effective Value** - Value of the ability that is used and displayed that incorporates all calculations and effects of spells, items, etc. 
* **Raw Value** - Value that is entered by the user during creation 
* **Mod Value** -  Mod value that is calculated from the abilty score.
* **Bonus Value** - Value that will contribute to the effective value. Some bonuses are typed and have specific stacking rules. 

**Strength**

Effective Strength = Raw Value + Bonuses. All Strength bonuses are cumulative. 

*For example: Bob has a STR of 10, a +2 Racial Bonus for being a Half-Orc, a +1 bonus for 4th level. His effective STR is 13. Now Bob gains a -1 STR so his STR is now 12.*

**Dexterity**
The effective value = raw value + Min(SUM(Bonus_values), MaxArmorDex)

### Armor Class

Armor Class is a complicated attribute with multiple bonuses. The basic formula for AC is

AC = 10 + Armor + Shield + DEX_MOD + Other Bonuses

* The "10" is the RAW value for AC
* The "Armor" value is the Armor Bonus given by the armor (e.g. Splint Mail has a +7 and +3 splint mail has an armor bonus of +10)
* The "Sheild" value is the Shielf Bonus given by the shield (just like armor)
* The "DEX_MOD" is the calculated dexterity modifier. Note that the dex mod is limited by the armor 
* The "Other Bonuses" is broken down into categories: 
* * Enhancement - Applied to an armor or sheild - Does not stack 
* * Deflection - Deflection bonuses do not stack with each other
* * Natural Armor - Natural Armor bonuses do not stack
* * Dodge - Dodge bonuses stack with each other (Cumulative)
* * Size - A character can only have a single "Size". 
* * Insight - Does not stack 
* * Luck - Does not stack 
* * Profane - Does not stack 
* * Sacred - Does not stack 
* * Manual - Assigned by the user or GM. Manual bonuses stack

Bonuses are 








