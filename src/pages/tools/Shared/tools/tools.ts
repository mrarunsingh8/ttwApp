import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
/*
  Generated class for the ToolsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToolsProvider {

  url: string = '../assets/data/premium-service-list.json';
  constructor(public http: HttpClient) {

  }
  getPremiumService(data:{serviceName?: string, orderId?: string, expiryDate?: string, remainingDays?: string}){
    return this.http.get<Array<any>>(this.url, {}).map((res)=> {

      if(data.serviceName){
        let terms = new RegExp(data.serviceName, 'i');
        res = res.filter((item)=> {
          if(item.serviceName.match(terms)){
            return item;
          }
        });
      }

      if(data.orderId){
        res = res.filter((item)=>{
          if(item.orderId == data.orderId){
            return item;
          }
        });
      }
      if(data.remainingDays){
        res = res.filter((item)=>{
          if(item.remainingDays == data.remainingDays){
            return item;
          }
        });
      }
      if(data.expiryDate){
        res = res.filter((item)=>{
          if(new Date(data.expiryDate).setHours(0,0,0,0)=== new Date(item.expiryDate).setHours(0,0,0,0)){
            return item;
          }
        });
      }
      return res;
    });
  }

}
