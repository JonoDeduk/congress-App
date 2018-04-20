//fetches Data on members of congress Via API requests
//#### API INFO ####//
// url: https://api.propublica.org/congress/v1/115/senate/members.json
// key: eSWFmfOycw0k6OHWydfe3a1AcTKkF1UO2o3DgZig
// api Documentation: https://projects.propublica.org/api-docs/congress-api/


import { Injectable } from '@angular/core';
import { Http, Headers,Response, Jsonp } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import { ApiCallService } from './api-call-service';
@Injectable()
export class MakeCongressService {
  data = {};
  congressMembers =[];

constructor(private ApiCallService: ApiCallService) {}

  //takes in the chamber of congress as senate or house
  //it is not possible to call both the senate and house at the same time => we must call getCongress twice.
  getCongress(chamber) {
    //sets the API call adds headers so that the call is sucessful
   this.data = this.ApiCallService.APICall('https://api.propublica.org/congress/v1/115/'+ chamber +'/members',[{'Content-Type': 'application/json'},{'X-API-Key': 'eSWFmfOycw0k6OHWydfe3a1AcTKkF1UO2o3DgZig'}])
   //subscribe takes the response and feeds it into a callback function
   .subscribe((response: Response) => {
   //converts the response to JSON
   let result = response.json();
   //the part that holds the data for each member of congress
   var congress = result.results[0].members;
   for (var i = 0; i < congress.length; i++) {
       this.congressMembers.push(
{        pic: 'https://theunitedstates.io/images/congress/450x550/'+ congress[i].id +'.jpg',
         name: congress[i].first_name + " " + congress[i].last_name,
         title: congress[i].title,
         twitter: congress[i].twitter_account,
         webpage: congress[i].url,
         phone: congress[i].phone,
         office: congress[i].office,
         party: this.fullpartyname(congress[i].party),
         percentParty: congress[i].votes_with_party_pct,
         missed_votes: congress[i].missed_votes,
         missed_votes_pct: congress[i].missed_votes_pct,
         state: congress[i].state,
         leadership_role: congress[i].leadership_role,
         district: congress[i].district
       }
       );

   }

 });

}

fullpartyname(letter){
if (letter == "D"){
  return "Democrat";
}else if (letter == "R"){
  return "Republican";
}else{
  return "Independent";
}

}


}
