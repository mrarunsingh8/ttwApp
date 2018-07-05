import { Component } from '@angular/core';
import {ActionSheetController, AlertController, NavController, NavParams} from 'ionic-angular';
import {AddPhotoGalleryPage} from "../add-photo-gallery/add-photo-gallery";

/**
 * Generated class for the PhotoGalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-photo-gallery',
  templateUrl: 'photo-gallery.html',
})
export class PhotoGalleryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtr: AlertController, private actionSheetCtr: ActionSheetController) {
  }

  openNew(){
    this.navCtrl.push(AddPhotoGalleryPage);
  }

  handleAction(){
    let actionSheet = this.actionSheetCtr.create({
      buttons: [
        {
          text: 'Edit',
          icon: 'create',
          handler: ()=>{
            this.navCtrl.push(AddPhotoGalleryPage);
          }
        },
        {
          text: 'Delete',
          icon: 'trash',
          handler: ()=>{
            this.deleteConfirm();
          }
        }
      ]
    });

    actionSheet.present();
  }


  deleteConfirm(){
    let confirm = this.alertCtr.create({
      title: 'Delete Testimonial?',
      message: 'Are you sure.? You want to Delete this Gallery?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
