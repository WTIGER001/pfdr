import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Character, Value } from '../../model'
import { EngineService } from '../../engine.service'

@Component({
  selector: 'app-ability-score-editor',
  templateUrl: './ability-score-editor.component.html',
  styleUrls: ['./ability-score-editor.component.css']
})
export class AbilityScoreEditorComponent implements OnInit, OnChanges {
  c: Character
  @Input() ability: string
  v: Value
  temp: Value
  constructor(private engine: EngineService) { }

  ngOnInit() {

  }

  @Input() public set character(c: Character) {
    this.c = c
    this.v = c.values.get(this.ability)
    this.temp = c.values.get(this.ability + ".tmp")
  }

  public get character(): Character {
    return this.c;
  }

  public getMod(): Value {
    if (this.v) {
      let mK = this.v.key + "_MOD"
      let m = this.c.values.get(mK)
      return m
    }
    return undefined
  }

  public getHelp(): string {
    return this.v.key
  }

  public changed(event) {
    // changes.prop contains the old and the new value...
    console.log("Change Event: Recalculating");
    this.engine.calculate(this.c)
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log("Change Detected: Recalculating");
    this.engine.calculate(this.c)
  }
}
