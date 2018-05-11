import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the ServiceDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceDataProvider {

  constructor(public http: Http) {
    //console.log('Hello ServiceDataProvider Provider');
  }
  getData(){
    let url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url).map((res)=>res.json()); 
  }
}
