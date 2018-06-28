import { Component } from '@angular/core';
import {App, IonicPage, NavController, ViewController} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {LoginPage} from "../login/login";
import {ChangeEmailPage} from "../change-email/change-email";
import {ChangePasswordPage} from "../change-password/change-password";
import {AdvertisePage} from "../advertise/advertise";

/**
 * Generated class for the PopoverRightMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover-right-menu',
  templateUrl: 'popover-right-menu.html',
})
export class PopoverRightMenuPage {

  constructor(private app: App, public navCtrl: NavController, private viewCtrl: ViewController, private authService: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverRightMenuPage');
  }

  doLogOut(){
    this.viewCtrl.dismiss();
    this.authService.doLogOut();
    this.app.getRootNav().setRoot(LoginPage);
  }

  openAdvertise(){
    this.viewCtrl.dismiss();
    this.app.getRootNav().push(AdvertisePage);
  }

  changeEmail(){
    this.viewCtrl.dismiss();
    this.app.getRootNav().push(ChangeEmailPage);
  }

  changePassword(){
    this.viewCtrl.dismiss();
    this.app.getRootNav().push(ChangePasswordPage);
  }

}
