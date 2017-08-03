import { Component, OnInit, Input } from '@angular/core';
import { Character, Database, Value } from '../../model'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  c: Character
  skills: Value[]
  @Input() database: Database

  constructor() { }

  ngOnInit() {

  }

  @Input() public set character(c: Character) {
    this.c = c
    console.log(c.values.getTypes());

    this.skills = c.values.getType("Skill")
    console.log("Skill count " + this.skills.length);

  }

  public get character(): Character {
    return this.c;
  }

  public addSkill() {

  }

}
