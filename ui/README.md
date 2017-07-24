# Pathfinder

Provides basic utilites for creating and managing characters in Pathfinder RPG. 

## Campaign
A campaign is a grouping mechanism for all elements in the tool. A campaign is where rules, characters, items, etcs are all stored. campaign can be shared with multiple players and GMs. Anyone can create a campaign. 

### Campaign List
A list of tiles showing the campaigns that the user is part of or has created and a big "New Campaign" Button. When the user selects a campaing then all the rules, characters, etc are loaded. There are 2 types of campaigns - Shared campaigns and private campaigns. 

### Campaign Information
Activates (or adds) a bunch of menus... TBD if you can have multiple campaigns open at once. 
There is a GM View and a Player View. The

### Campaign Actions

- Create - Creates a new campaign
- Delete - Deletes a campaign
- Share - Manages who the campaign is shared with. Shared as GM, Player, Follower; private, gaming group and everyone
- Play - Enter the Play mode for the campaign
- Open - Open / Load the campaign

### Campaign Attributes

- Game Masters - List of people that are the game masters. Game masters are the "Admins"
- Players - People that own or can create players in the campaign
- Followers - People that are following the campaign (read-only)
- Game System
- Rule Books in Play
- Custom Rules
- Visibity - who can discover the campaign gaming group and everyone
- Image - Image of the campaign
- Notes - campaign notes
- Assets - Maps, pictures, files, etc. 
- GM Resources - Folder for the GM to place anything that only other GMs can see (like modules)
- Characters
- NPCs
- Places

## User

- Campaigns
- Player Characters

## Model

User
Campaign
- Game System
-- Rulebook
--- Rule
--- Class
--- Spell
--- Feat
-- Custom Rules
--- Custom Rule
- Character
- Equipment
- Assets
-- Maps
-- etc.
- Game Log
- History

## Effect Calculation Engine

There are lots of concepts in the game that requires bonuses, limits and calculations be performed to generate the correct end results. This secion defines the basic idea behind the calculation engine, design decisions and the object model. 

### Terms

* **Effect Definition** - Provides a definition for an effect. The defintion contains the constant effects or conditional effects. A conditional effect is defined with a formula. 
* **Effect** - The results of an Effect Definition that is applied
* **User Choice** - Some effect definitions require the user to select an option. For instance, a simple example is the Human choice on which ability score recieves a +2. The Effect Definition includes this choice but the Effect does not.
* **Effect Target** - A target is any value in the game that can have effects applied to it. There are multiple types of targets from ability scores to skill ranks. Each target is uniquely identified by a key. Some targets apply to categories of targets. Each category also has a key. 
* **Value** - A simple value holder
* **CompositeValue** - A mmore complex value holder

### Effect Targets

* Ability Scores (Str, Dex, Con, Int, Wis, Cha)
* Ability Score Mods (Str_mod, Dex_mod, Con_mod, Int_mod, Cha_mod )
* Saving Throws (Fort, Will, Ref)
* Skills (Appraise, Intimidate, Knowledge(Dungeonerring), Craft(Armor), etc.)
* Physical Attribute (Height, Weight)
* Combat Attributes (HP, HP_TEMP, CMB, CMD, BAB, AC, AC_FLAT, AC_TOUCH)
* Spell Attributes
* Levels
* Skill Categories (DEX, INT, STR, WIS, etc)
* Gear (Armor_max_dex)

Targets are defined in a JSON file. 

### Models

**EffectDefintion**
* name - name of the effect definition
* desc - description
* url - url to a better description
* target - the key of the effect target (consider more than 1), case insensitive
* bonus - a constant scalar bonus (possitive or negative) that is applied or a formula. If the string contains only number then it is assumed to be a scalar
* limit_min - a value that is used to limit the target. For instance, Armor provides a max-dex
* limit_max - a value that is used to limit the target. For instance, Armor provides a max-dex
* when - a formula steting when the effect is conditionally valid. For example, an effect only applies if the character has on medium armor (armor.type = medium) (Better explain) 
* user-selection - The user selection object

**EffectTarget**
* key - unique string that identifes this target. This string must be used anywhere in an effect formula. Case-Insensitive
* name - The name of the target (for users)
* desc - a description of the Target (for users)
* priority - the default calculation priority

**Effect**
* from - name of the effect definition
* target - unique string that identifes this target. This string must be used anywhere in an effect formula. Case-Insensitive
* bonus - scalar bonus
* limit_min  - scalar limit
* limit_max - Max value allowed

**Value**
* key - the Key for this value (e.g. STR, STR_MOD,...)
* raw - the raw value
* bonus - the sum of all applicable bonuses
* limit - the limit object (max and min)
* total - The total, effective value

**CompositeValue** 
* key - the Key for this value (e.g. AC,...)
* values - collection of contributing values (map)

### Data Flow

1. Collect all the EffectDefinitions from the character
2. Validate all the EffectDefinitions to make sure that the formulas and when statements are proper
3. Sort the EffectDefinitions based on the variables they use
4. Iteratively evaluate the formulas to generate Effects
5. Apply the Effects to the Targets

# Notes

* Figure out how to use ex abilities and feats with user selections. Selection types can be weapon name, weapon type, armor type, etc

* Release Skill points 
* Extra Armor Bonus
* Limit / Restrict bonuses max(1/4* LVLS, 3)
* Add "charges" based on level
* Add a weapon and/or attack

## Application Design 

Use Google

### Mobile

This app has to work on a phone.... at least to see character sheets, etc.

## Application Development 

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
