import { Campaign, Database, Rule, Book, User } from './model'

export class Mock {
    public mockUser: User
    public mockDb: Database

    constructor() {
        let u = new User()
        u.email = "john.bauer.iii@gmail.com"
        this.mockUser = u
    }

}