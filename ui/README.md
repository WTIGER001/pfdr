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
