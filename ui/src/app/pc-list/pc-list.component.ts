import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { UUID } from 'angular2-uuid'
import { Character } from '../model'
import { DbService } from '../db.service'

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.css']
})
export class PcListComponent implements OnInit {

  constructor(
    private _dbService: DbService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  newCharacter() {
    let uuid = UUID.UUID()
    let c = new Character()
    c.id = uuid
    c.personal.name = "New Character"

    this._dbService.addCharacter(c)
    this.router.navigate(['/characters', c.id]);
  }

}
