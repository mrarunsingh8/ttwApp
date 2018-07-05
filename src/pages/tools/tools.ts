import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {PremiumServiceFilterComponent} from "../../components/premium-service-filter/premium-service-filter";
import {ToolsProvider} from "./Shared/tools/tools";

/**
 * Generated class for the ToolsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tools',
  templateUrl: 'tools.html',
})
export class ToolsPage{

  filterData: {serviceName?: string, orderId?: string, expiryDate?: string, remainingDays?: string}={serviceName: '', orderId: '', expiryDate: '', remainingDays: ''};

  serviceData: Array<{serviceName?: string, orderId?: string, expiryDate?: string, remainingDays?: string, hasDetail: boolean}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtr: ModalController, private toolsService: ToolsProvider) {
  }

  ionViewDidLoad() {
    this.doFilterData();
  }

  openFilter(){
    let modal = this.modalCtr.create(PremiumServiceFilterComponent, {data: this.filterData});
    modal.onDidDismiss(data => {
      if(data.done){
        this.filterData = data.filterData;
        this.doFilterData();
      }
    });
    modal.present();
  }

  doFilterData(){
    this.toolsService.getPremiumService(this.filterData).subscribe((res)=>{
      this.serviceData = res;
    });
  }

}
