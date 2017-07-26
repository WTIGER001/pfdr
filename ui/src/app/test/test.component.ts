import { Component, OnInit } from '@angular/core';
import { Character } from '../model'
import { EngineService } from '../engine.service'
import { DbService } from '../db.service'
import { Formula } from '../model/formula'
import { EffectDef } from '../model/ref/effectDef'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  character: Character;
  formula: string
  f: Formula
  result: number
  error: string
  effect = new EffectDef()

  constructor(private engine: EngineService, private db: DbService) {

    this.db.db.subscribe(d => {
      this.character = this.engine.newCharacter()
    })
  }

  ngOnInit() {
  }

  public deleteEffect(e) {
    for (let i = 0; i < this.character.manual.length; i++) {
      if (this.character.manual[i] === e) {
        this.character.manual.splice(i, 1)
      }
    }
    this.calc()
  }

  public addEffect() {
    this.character.manual.push(this.effect)
    this.effect = new EffectDef
    this.calc()
  }

  public calc() {
    console.log("Calculating");
    this.engine.calculate(this.character)
  }

  public calcFormula() {
    try {
      this.f = new Formula(this.formula)
      let a = this.engine.evaluateFormula(this.character, this.f)
      this.result = a
      this.error = ""
    } catch (error) {
      this.result = NaN
      this.error = error
    }
  }
}
