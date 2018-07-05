import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedBackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed-back',
  templateUrl: 'feed-back.html',
})
export class FeedBackPage {

  feedBackType: Array<{id:number, title: string}>=[
    {id: 1, title: 'Suggestions'},
    {id: 2, title: 'Appreciation'},
    {id: 3, title: 'Bug / Error Report'},
    {id: 4, title: 'Complaint'},
    {id: 5, title: 'Interested in Services'},
    {id: 0, title: 'Other'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedBackPage');
  }

}
