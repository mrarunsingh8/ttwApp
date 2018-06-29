import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PackageRateCardUpdatePage} from "../package-rate-card-update/package-rate-card-update";

/**
 * Generated class for the PackageRateCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-package-rate-card',
  templateUrl: 'package-rate-card.html',
})
export class PackageRateCardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackageRateCardPage');
  }

  updateRateCard(){
    this.navCtrl.push(PackageRateCardUpdatePage);
  }

}
