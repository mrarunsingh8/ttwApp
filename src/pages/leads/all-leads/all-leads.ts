import { Component } from '@angular/core';
import {ActionSheetController, NavController, NavParams} from 'ionic-angular';
import {UpdateLeadPage} from "../update-lead/update-lead";
import {LeadDetailPage} from "../lead-detail/lead-detail";
import {SendEmailPage} from "../send-email/send-email";

/**
 * Generated class for the AllLeadsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-all-leads',
  templateUrl: 'all-leads.html',
})
export class AllLeadsPage {

  filter: string = 'new';
  filterData: Array<{id: string, value: string, count: number}> = [
    {id: 'all', value: 'All', count: 0},
    {id: 'new', value: 'New', count: 10},
    {id: 'active', value: 'Active', count: 12},
    {id: 'mail-received', value: 'Mail Received', count: 16},
    {id: 'today-followup', value: 'Today`s Followup', count: 20},
    {id: 'meatured-closed', value: 'Meatured / Closed', count: 7}
  ];

  leadData: Array<any> = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetController: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllLeadsPage');
  }


  showAction(){
    console.log("open Action");
    const actionSheet = this.actionSheetController.create({
      title: 'Action',
      buttons: [
        {
          text: 'Add Note', icon: 'add', handler: ()=>{
            this.navCtrl.push(UpdateLeadPage);
          }
        },
        {text: 'Send Email', icon: 'mail', handler: ()=>{
            this.navCtrl.push(SendEmailPage);
          }
        },
        {text: 'View Detail', icon: 'browsers', handler: ()=>{
            this.navCtrl.push(LeadDetailPage);
          }
        },
      ]
    });
    actionSheet.present();
  }

}
