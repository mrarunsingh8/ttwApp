import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ImageGalleryPage} from "./image-gallery/image-gallery";

/**
 * Generated class for the ManagePackagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-packages',
  templateUrl: 'manage-packages.html',
})
export class ManagePackagesPage {

  packageList: Array<any> = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagePackagesPage');
  }

  openImageGallery(id){
    this.navCtrl.push(ImageGalleryPage);
  }

}
