import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service'

@Component({
  selector: 'app-rulebook',
  templateUrl: './rulebook.component.html',
  styleUrls: ['./rulebook.component.css']
})
export class RulebookComponent implements OnInit {

  filter: string
  categories = ["Races", "Classes", "Skills", "Feats", "Armor", "Weapons", "Gear", "Spells", "Index"]
  _category = "Classes"
  list: string[] = new Array()

  constructor(private _dbService: DbService) {

  }

  ngOnInit() {

  }

  public set category(c: string) {
    this._category = c
    switch (c) {
      case "Races":
        this.list = this._dbService.getNames()
    }
  }

}
