import { Component, OnInit } from '@angular/core';
import { Character, Value } from '../model';
import { EngineService } from '../engine.service'
import { DbService } from '../db.service'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})

export class CharacterComponent implements OnInit {
  c: Character = undefined

  constructor(private engine: EngineService, private db: DbService) {
    this.db.db.subscribe(d => {
      this.character = this.engine.newCharacter()
    })
  }

  ngOnInit() {

  }

  public set character(c: Character) {
    this.c = c
  }
  public get character(): Character {
    return this.c
  }

  public get ready(): boolean {
    return this.c != undefined
  }

  public val(key: string): Value {
    return this.character.values.get(key)
  }

  public get abilityScores(): Value[] {
    return this.character.values.getType('Ability Score')
  }
}
