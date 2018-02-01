import { Component, OnInit, Input } from '@angular/core';
import { MouseoverCongressCardDirective } from '../mouseover-congress-card.directive';
import { MakeCongressService } from '../make-congress.service';

@Component({
  selector: 'app-congress-card',
  templateUrl: './congress-card.component.html',
  styleUrls: ['./congress-card.component.less']
})
export class CongressCardComponent implements OnInit {
 @Input() congressMember: {  pic: string, name: string, info: string};

  constructor(private MakeCongressService: MakeCongressService) { }

  ngOnInit() {



  }

}
