import { Component, Input } from '@angular/core';
import { CalcResult, CalcResultElement } from '../../model/calcResult'

@Component({
  selector: 'app-calc-explain',
  templateUrl: './calc-explain.component.html',
  styleUrls: ['./calc-explain.component.css']
})
export class CalcExplainComponent {
  @Input() result: CalcResult

  constructor() {
    let c = new CalcResult()

  }
}
