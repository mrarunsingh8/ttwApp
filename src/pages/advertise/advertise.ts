import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdvertisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advertise',
  templateUrl: 'advertise.html',
})
export class AdvertisePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvertisePage');
  }

  data: any = [
    {
      name: "Basic Package",
      data: [
        {}
      ]
    },
    {
      name: "Star Package",
      data: [
        {}
      ]
    },
    {
      name: "Banner Advertisement",
      data: [
        {}
      ]
    },
    {
      name: "Adon features",
      data: [
        {}
      ]
    }
  ];

}
