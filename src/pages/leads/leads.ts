import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AllLeadsPage} from "./all-leads/all-leads";
import {TrackEmailPage} from "./track-email/track-email";

/**
 * Generated class for the LeadsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leads',
  templateUrl: 'leads.html',
})
export class LeadsPage {

  leadType: string= 'mylead';

  myLeadData: Array<{component?: any, title: string, count?: string, countIcon?: string, image: string, description: string}> = [
    {component: AllLeadsPage, title: 'All Leads', count: "2", image: 'http://www.betattw.in/static/assets/images/all-lead-icon.png', description: 'View, analyze and act on all your travel leads here, without handling multiple pages for managing leads.'},
    {component: AllLeadsPage, title: 'Todays Followup', count: "0", image:'http://www.betattw.in/static/assets/images/today-followp-icon.png', description: 'Keep a strong check of important things, plan in advance and meet deadlines without a fail.'},
    {component: TrackEmailPage, title: 'Track Email', count: "4", image: 'http://www.betattw.in/static/assets/images/track-email-icon.png', description: 'Now it`s easier to track user-action on your sent emails and check if your email is clicked or even delivered.'},
    {component: AllLeadsPage, title: 'Add Email', countIcon: 'add', image: 'http://www.betattw.in/static/assets/images/add-lead-icon.png', description: 'Get the freedom of adding your own leads with complete privacy.'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeadsPage');
  }

  openPage(page){
    this.navCtrl.push(page);
  }

}
