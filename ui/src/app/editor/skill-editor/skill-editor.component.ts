import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Character, Value, Skill, Database } from '../../model'
import { EngineService } from '../../engine.service'
import { DbService } from '../../db.service'
import { SkillDef } from '../../model/ref/skillDef'


@Component({
  selector: 'app-skill-editor',
  templateUrl: './skill-editor.component.html',
  styleUrls: ['./skill-editor.component.css']
})
export class SkillEditorComponent implements OnInit, OnChanges {
  c: Character
  s: Skill
  @Input() database: Database
  constructor(private engine: EngineService) { }

  ngOnInit() {

  }

  @Input() public set character(c: Character) {
    this.c = c
  }

  public get character(): Character {
    return this.c;
  }


  @Input() public set skill(s: Skill) {
    this.s = s
  }

  public get skill(): Skill {
    return this.s
  }

  public getHelp(): string {
    return this.s.name
  }

  public getAbility(): string {
    return this.skill.ability.toUpperCase()
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

