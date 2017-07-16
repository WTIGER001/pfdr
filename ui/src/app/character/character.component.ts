import { Component, OnInit } from '@angular/core';
import { Character } from '../model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character: Character = new Character()

  constructor() {

  }

  ngOnInit() {

  }


}
