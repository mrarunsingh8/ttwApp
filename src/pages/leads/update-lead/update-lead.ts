import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the UpdateLeadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-update-lead',
  templateUrl: 'update-lead.html',
})
export class UpdateLeadPage {

  notesData: Array<{value: string, text: string}> = [
    {value: 'Add Note', text: 'Add Note'},
    {value: 'Interested', text: 'Interested'},
    {value: 'Quote Sent', text: 'Quote Sent'},
    {value: 'Call Later', text: 'Call Later'},
    {value: 'Not Interested', text: 'Not Interested'},
    {value: 'Wrong Number', text: 'Wrong Number'},
    {value: 'Postponed', text: 'Postponed'},
    {value: 'Cancelled', text: 'Cancelled'},
    {value: 'Confirmation Received', text: 'Confirmation Received'},
    {value: 'Advance Received', text: 'Advance Received'},
    {value: 'Payment Followup', text: 'Payment Followup'},
    {value: 'Balance Amount Received', text: 'Balance Amount Received'},
    {value: 'Booked with other', text: 'Booked with other'},
    {value: 'Closed', text: 'Closed'},
    {value: 'Matured', text: 'Matured'},
    {value: 'Other', text: 'Other'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateLeadPage');
  }

  submitForm(){
    this.viewController.dismiss();
  }

}
