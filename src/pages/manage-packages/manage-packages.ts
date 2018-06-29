import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ImageGalleryPage} from "./image-gallery/image-gallery";
import {AddPricePage} from "./add-price/add-price";
import {AddPackagePage} from "./add-package/add-package";
import {DayItineraryPage} from "./day-itinerary/day-itinerary";
import {PackageRateCardPage} from "./package-rate-card/package-rate-card";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetCtr: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagePackagesPage');
  }

  openImageGallery(id){
    this.navCtrl.push(ImageGalleryPage);
  }

  openAddPrice(id?:number){
    this.navCtrl.push(AddPricePage);
  }

  handleClick(){
    let actionSheet = this.actionSheetCtr.create({
      buttons: [
        {
          text: 'Edit Package',
          handler: ()=>{
            this.navCtrl.push(AddPackagePage);
          }
        },
        {
          text: 'Gallery',
          handler: ()=>{
            this.navCtrl.push(ImageGalleryPage);
          }
        },

        {
          text: 'Day wise Itinarary',
          handler: ()=>{
            this.navCtrl.push(DayItineraryPage);
          }
        },

        {
          text: 'Rate card',
          handler: ()=>{
            this.navCtrl.push(PackageRateCardPage);
          }
        },
        {
          text: 'Delete Package',
          handler: ()=>{

          }
        }
      ]
    });
    actionSheet.present();
  }
}

