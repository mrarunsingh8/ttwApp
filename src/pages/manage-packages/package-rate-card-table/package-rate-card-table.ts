import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PackageRateCardTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-package-rate-card-table',
  templateUrl: 'package-rate-card-table.html',
})
export class PackageRateCardTablePage {
  tableConfig: {rows: number, cols: number};
  tableData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tableConfig = this.navParams.get("tableConfig");
    this.tableData = this.navParams.get("tableData");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackageRateCardTablePage');
  }

  closeModal(){
    this.navCtrl.pop();
  }

  done(){
    console.log("Hihihi");
  }

}
