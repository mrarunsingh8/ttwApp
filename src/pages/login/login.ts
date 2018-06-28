import { Component } from '@angular/core';
import {AlertController, IonicPage, MenuController, NavController} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthProvider} from "../../providers/auth/auth";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private navCtrl: NavController, private menuCtr: MenuController, private formBuilder: FormBuilder, private authService: AuthProvider, private alertController: AlertController) {
    this.menuCtr.enable(false);
  }
  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  doLogin() {
    if(this.loginForm.valid){
      const data = this.authService.doLogin(this.loginForm.value);
      if(data.success){
        this.navCtrl.setRoot(HomePage);
      }else{
        const alert = this.alertController.create({title: "Error !", subTitle: data.message, buttons: ['Retry']});
        alert.present();
      }
    }
  }

}
