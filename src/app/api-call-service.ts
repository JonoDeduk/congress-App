import { Injectable } from '@angular/core';
import {Http, Headers,Response, Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class ApiCallService {

data = {};

constructor(private http: Http) {}

//headersToAppend takes an array of headers.
//when you call APIcall from another place you retreave the data with a subscription and a callback.
// IE: .subscribe((response: Response) => {)
APICall(APIurl , headersToAppend ){
  const headers = new Headers();
    for(var i=0; i< headersToAppend.length; i++){
      headers.append(Object.keys(headersToAppend[i])[0], Object.values(headersToAppend[i])[0]);
    }
      return this.http.get(APIurl,{headers:headers})
}


}
