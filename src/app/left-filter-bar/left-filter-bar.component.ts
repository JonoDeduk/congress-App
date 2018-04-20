import { Component, OnInit } from '@angular/core';
import { CheckboxFilterService } from '../checkbox-filters.service';

@Component({
  selector: 'app-left-filter-bar',
  templateUrl: './left-filter-bar.component.html',
  styleUrls: ['./left-filter-bar.component.less']
})
export class LeftFilterBarComponent implements OnInit {
  filters= {};

  constructor(private CheckboxFilterService: CheckboxFilterService ) { }

  ngOnInit() {
    this.CheckboxFilterService.initFilters();
    this.filters = this.CheckboxFilterService.filters;
  }

  filterCheck(filter, SpecificBoxChecked){
    this.filters[filter][SpecificBoxChecked] = !this.filters[filter][SpecificBoxChecked];
    console.log(this.filters);
  }



}
