import { Component } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

/**
 * Generated class for the PremiumServiceFilterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'premium-service-filter',
  templateUrl: 'premium-service-filter.html'
})
export class PremiumServiceFilterComponent {

  text: string;

  filterData: {serviceName?: string, orderId?: string, expiryDate?: string, remainingDays?: string};

  constructor(private params: NavParams, private viewCtr: ViewController) {
    this.filterData = this.params.get("data");
  }

  closeModal(){
    this.viewCtr.dismiss({done: false, filterData: this.filterData});
  }

  doFilter(){
    this.viewCtr.dismiss({done: true, filterData: this.filterData});
  }



}
