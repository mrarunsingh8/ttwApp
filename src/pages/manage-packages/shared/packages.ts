import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PackagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PackagesProvider {

  constructor(public http: HttpClient) {

  }

  getCityList(){
    return this.http.get<Array<{id:number, name: string}>>('../assets/data/city-list.json');
  }

  getPackageInclusionList(){
    return this.http.get<Array<{id:number, name: string}>>('../assets/data/inclusion-list.json');
  }

  getThemeTagList(){
    return this.http.get<Array<{id:number, name: string}>>('../assets/data/theme-tag-list.json');
  }

}
