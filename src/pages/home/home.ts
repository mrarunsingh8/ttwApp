import { Component } from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private menuCtr: MenuController, private authProvider: AuthProvider) {

  }

  ionViewCanEnter(){
    if(!this.authProvider.isLogin()){
      this.navCtrl.setRoot(LoginPage);
    }else{
      this.menuCtr.enable(true);
    }
  }


}
