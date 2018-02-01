import { Injectable } from '@angular/core';


@Injectable()
export class MakeCongressService {
congressMembers: { pic: string, name: string, info: string}[] = [];








  constructor() {
this.congressMembers =[
  {
    pic: 'assets/B000944.jpg',
    name: 'CongressMemberName',
    info: 'CongressMemberInfo'
  }
];





}

}
