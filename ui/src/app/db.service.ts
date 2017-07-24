import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable, Subject, ReplaySubject } from "rxjs/Rx"
import { User, Campaign, RuleBook, Database, Character, Target, Subtarget } from './model'
import { Mock } from './mock'

@Injectable()
export class DbService {

  public campaign: Subject<Campaign> = new Subject()
  public user: Subject<User> = new ReplaySubject();
  public db: Subject<Database> = new ReplaySubject();
  public characters: Map<string, Character> = new Map<string, Character>();
  public namedArrays = new Map<string, Array<number>>()
  public targets = new Map<string, Target>()
  public subtargets = new Map<string, Subtarget>()

  public badDb: Database
  constructor() {
    let mock = new Mock()
    let u: User = new User()
    u.email = "john.bauer.iii@gmail.com"

    this.user.next(mock.mockUser)
    this.db.next(mock.mockDb)
    this.badDb = mock.mockDb
  }

  public setCurrentCampaign(c: Campaign) {
    this.campaign.next(c)
  }

  public addCharacter(c: Character) {
    this.characters.set(c.id, c)
  }

  public getCharacter(id: string) {
    return this.characters.get(id)
  }

  public getNamedArrays(): Map<string, Array<number>> {
    return this.namedArrays
  }
}
