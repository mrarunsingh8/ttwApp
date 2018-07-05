import { Component } from '@angular/core';
import {ActionSheetController, AlertController, NavController, NavParams} from 'ionic-angular';
import {AddTestimonialPage} from "../add-testimonial/add-testimonial";

/**
 * Generated class for the TestimonialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-testimonial',
  templateUrl: 'testimonial.html',
})
export class TestimonialPage {
  status: string = 'all';
  statusData: Array<{title: string, value: string, count: number}> = [
    {title: 'All', value: 'all', count: 94},
    {title: 'Aprooved', value: 'approved', count: 2},
    {title: 'Unapproved', value: 'unapproved', count: 3},
    {title: 'Pending', value: 'pending', count: 13},
    {title: 'Canceled', value: 'cancled', count: 76},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtr: AlertController, private actionSheetCtr: ActionSheetController) {
  }

  ionViewDidLoad() {
  }

  openNew(){
    this.navCtrl.push(AddTestimonialPage);
  }

  handleAction(){
    let actionSheet = this.actionSheetCtr.create({
      buttons: [
        {
          text: 'Edit',
          handler: ()=>{
            this.navCtrl.push(AddTestimonialPage);
          }
        },
        {
          text: 'Delete',
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
      message: 'Are you sure.? You want to Reject this testimonial?',
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
