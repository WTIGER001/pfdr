import { Component, OnInit } from '@angular/core';
import { Character } from '../model'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  character: Character;

  constructor() {
    this.character = new Character()
  }

  ngOnInit() {
  }

  public calc() {



  }

}
