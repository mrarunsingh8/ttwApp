import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {PackageRateCardTablePage} from "../package-rate-card-table/package-rate-card-table";

/**
 * Generated class for the PackageRateCardUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-package-rate-card-update',
  templateUrl: 'package-rate-card-update.html',
})
export class PackageRateCardUpdatePage {

  table: {rows: number, cols: number}={rows: 1, cols: 1};
  tableData: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtr: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackageRateCardUpdatePage');
  }

  doManageTable(){
    let modal = this.modalCtr.create(PackageRateCardTablePage, {tableConfig: this.table, tableData: this.tableData});
    modal.present();
  }
}
