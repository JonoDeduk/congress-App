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

  constructor(private makeCongressService: MakeCongressService) { }

  ngOnInit() {
    this.congressMembers = this.makeCongressService.congressMembers;
  }

}
