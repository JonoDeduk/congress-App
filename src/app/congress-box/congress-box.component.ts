import { Component, OnInit,  Input, OnChanges } from '@angular/core';
import { MakeCongressService } from '../make-congress.service';
import { CheckboxFilterService } from '../checkbox-filters.service';


@Component({
  selector: 'app-congress-box',
  templateUrl: './congress-box.component.html',
  styleUrls: ['./congress-box.component.less']
})

export class CongressBoxComponent implements OnInit {
congressMembers: { pic: string, name: string, info: string}[] = [];
howmanyloaded: number;
checkedParty : {};
filters: {};
  constructor(private makeCongressService: MakeCongressService, private CheckboxFilterService: CheckboxFilterService) { }

  ngOnInit() {

    this.makeCongressService.getCongress('senate');
    this.makeCongressService.getCongress('house');
    this.congressMembers = this.makeCongressService.congressMembers;
    this.howmanyloaded = 20;
    this.filters = this.CheckboxFilterService.filters;
    console.log(this.filters);
    this.checkedParty = this.filters['party'];
  }
  ngOnChanges(){
    console.log(this.checkedParty);
  }


  //when the loadmore button is pressed this loads the additional congress members.
  loadmore(){
    this.howmanyloaded = this.howmanyloaded + 20;

  }



}
