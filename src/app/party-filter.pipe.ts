import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'partyFilter',
  pure: false
})
export class PartyFilterPipe implements PipeTransform {

  transform(congressMembers: any,checkedParty:any): any {
        if(!checkedParty.Democrat && !checkedParty.Republican && !checkedParty.Independent){
            return congressMembers;
        }

        return congressMembers.filter(congressMembers =>
                                (checkedParty['Democrat'] && congressMembers.party == "Democrat")
                                || (checkedParty['Republican'] && congressMembers.party == "Republican")
                                || (checkedParty['Independent'] && congressMembers.party == "Independent"))
    }
}
