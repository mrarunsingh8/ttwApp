import { Component } from '@angular/core';
import {IonicPage, NavController, PopoverController} from 'ionic-angular';
import {PopoverRightMenuPage} from "../popover-right-menu/popover-right-menu";

/**
 * Generated class for the MenuHeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-header',
  templateUrl: 'menu-header.html',
})
export class MenuHeaderPage {

  constructor(public navCtrl: NavController, private popoverCtr: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuHeaderPage');
  }

  openMenuPopOver(evt){
    const popover = this.popoverCtr.create(PopoverRightMenuPage);
    popover.present({ev: evt});
  }


}
