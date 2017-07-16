// A RuleSet defines a set of rules. Rules can be individually disabled in a rulebook
export class RuleBook {
    // If this rulebook is required
    public required: Boolean

    // Gamesystem for the rulebook
    public gamesystem: string

    // Name of the rule book
    public name: string

    // Image of the rulebook
    public image: string

    // Copyright statement
    public copyright: string

    // Order to display and apply the rules. The lower the order the earlier in the stack / set of rules. THis means
    // That rules with the same key in multiple rulebooks will be replaced.
    public order: number

    // Other Rulebooks that this one is dependent upon
    public dependencies: string[]

    // Description of the Rulebook
    public description: string
}