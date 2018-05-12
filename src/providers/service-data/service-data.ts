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
    let url = 'http://10.80.39.17/TSP58/nursing/index.php/researcher/dashboard/get_data_tile_research';
    return this.http.get(url).map((res)=>res.json()); 
  }
}
