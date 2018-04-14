import {
  Component,
  OnInit,
  Input
 } from '@angular/core';

import { MakeCongressService } from '../make-congress.service';

@Component({
  selector: 'app-congress-box',
  templateUrl: './congress-box.component.html',
  styleUrls: ['./congress-box.component.less']
})

export class CongressBoxComponent implements OnInit {
congressMembers: { pic: string, name: string, info: string}[] = [];
howmanyloaded: number;

  constructor(private makeCongressService: MakeCongressService) { }

  ngOnInit() {
    this.makeCongressService.getCongress('senate');
    this.makeCongressService.getCongress('house');
    this.congressMembers = this.makeCongressService.congressMembers;
    this.howmanyloaded = 20;
    


  }
  //when the loadmore button is pressed this loads the additional congress members.
  loadmore(){
    this.howmanyloaded = this.howmanyloaded + 20;
  }

}
