import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable, Subject, ReplaySubject, AsyncSubject } from "rxjs/Rx"
import { User, Campaign, RuleBook, Database, Character, Target, Subtarget } from './model'
import { Mock } from './mock'

@Injectable()
export class DbService {

  public campaign: Subject<Campaign> = new ReplaySubject(1)
  public user: Subject<User> = new ReplaySubject(1);
  public db: Subject<Database> = new ReplaySubject();

  public characters: Map<string, Character> = new Map<string, Character>();

  constructor(private http: Http) {
    let mock = new Mock()
    let u: User = new User()
    u.email = "john.bauer.iii@gmail.com"

    this.user.next(mock.mockUser)

    this.loadDatabase().subscribe(d => {
      let newDb = new Database().fromJson(d)
      newDb.index()
      console.log("New Database! " + newDb.books.length);
      this.db.next(newDb)
    })
  }

  public loadDatabase(): Observable<Database> {
    return this.http.get("http://localhost:3000/database/").map(r => r.json())
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

}
