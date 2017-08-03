export class SkillDef {
    name: string
    source: string
    ability: string
    definition: string
    skillCategory: string // Knowledge, Craft, Profession
    acp: boolean
    untrained: boolean
    category: boolean = false
    allow_new: boolean = false
    choices: string[]

    public fromJson(c: SkillDef): SkillDef {
        Object.assign(this, c)

        return this
    }
}