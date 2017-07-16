import { RuleBook } from "./rulebook"


// Describes a campaign object
export class Campaign {
    public id: string = ""
    public name: String = "New Campaign"
    public gameMasters: String[] = []
    public players: String[] = []
    public shared: Boolean = false
    public dateCreated: String = ""
    public lastAccess: String = ""
    public rulebooks: RuleBook[] = []
    public description: string = ""

    constructor() {
        this.rulebooks = new Array();
    }
}

