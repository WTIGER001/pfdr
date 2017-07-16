import { Campaign, Database, Rule, RuleBook, User } from './model'

export class Mock {
    public mockUser: User
    public mockDb: Database

    constructor() {
        let u = new User()
        u.email = "john.bauer.iii@gmail.com"
        this.mockUser = u

        let db = new Database()

        let r = new RuleBook()
        r.required = true
        r.gamesystem = "Pathfinder"
        r.name = "Core Rules"
        r.image = "assets/images/rulebooks/pathfinder_core.png"
        r.copyright = "Pazio"
        r.order = 0
        r.dependencies = []
        r.description = "Pathfinder Core Rules"

        db.rulebooks.push(r)

        let r1 = new RuleBook()
        r1.required = true
        r1.gamesystem = "Pathfinder"
        r1.name = "Mythic Adventures"
        r1.image = "assets/images/rulebooks/mythic_adventures.jpg"
        r1.copyright = "Pazio"
        r1.order = 0
        r1.dependencies = ["Core Rules"]
        r1.description = "Pathfinder Core Rules"

        db.rulebooks.push(r1)

        let r2 = new RuleBook()
        r2.required = true
        r2.gamesystem = "Pathfinder"
        r2.name = "Advanced Race Guide"
        r2.image = "assets/images/rulebooks/advanced_race_guide.jpg"
        r2.copyright = "Pazio"
        r2.order = 0
        r2.dependencies = ["Core Rules"]
        r2.description = "Pathfinder Core Rules"

        db.rulebooks.push(r2)

        this.mockDb = db
    }

}