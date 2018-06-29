import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UpdateItineraryPage} from "../update-itinerary/update-itinerary";

/**
 * Generated class for the DayItineraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-day-itinerary',
  templateUrl: 'day-itinerary.html',
})
export class DayItineraryPage {
  dayItinerary: Array<any> = [
    {day: 1},
    {day: 2},
    {day: 3},
    {day: 4},
    {day: 5},
    {day: 6},
    {day: 7}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DayItineraryPage');
  }

  updateItinerary(){
    this.navCtrl.push(UpdateItineraryPage);
  }

}
