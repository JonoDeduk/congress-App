import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CheckboxFilterService {
  filters = {};




  constructor() { }

initFilters(){
this.filters ={
  party:{Democrat:false,Republican:false,Independent:false},
  chamber:{House:false,Senate:false}
};

console.log(this.filters);
}


}
