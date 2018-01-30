import { Component, OnInit } from '@angular/core';
import { MouseoverCongressCardDirective } from '../mouseover-congress-card.directive';


@Component({
  selector: 'app-congress-card',
  templateUrl: './congress-card.component.html',
  styleUrls: ['./congress-card.component.less']
})
export class CongressCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
