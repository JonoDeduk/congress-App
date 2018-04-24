import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chamberFilter',
  pure: false
})
export class ChamberFilterPipe implements PipeTransform {

  transform(congressMembers: any,checkedChamber:any): any {
        if(!checkedChamber.House && !checkedChamber.Senate){
            return congressMembers;
        }

        return congressMembers.filter(congressMembers =>
                                (checkedChamber['House'] && congressMembers.chamber == "House")
                                || (checkedChamber['Senate'] && congressMembers.chamber == "Senate"))
    }
}
