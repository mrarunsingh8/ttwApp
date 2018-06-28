import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private local: any;

  loginData: {email: string, password: string} = {email: "admin@gmail.com", password: "11111"};
  constructor(public http: HttpClient) {
    this.local = localStorage;
  }

  isLogin(): boolean{
    const token = this.getLocalItem("token");
    return (this.getLocalItem("isLogin") === "true" && token != '');
  }

  private getLocalItem(key: string){
    return this.local.getItem(key);
  }

  private generateToken(){
    const stringLength = 45;
    const stringArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!','?'];
    var rndString = '';
    for (var i = 1; i < stringLength; i++) {
      var rndNum = Math.ceil(Math.random() * stringArray.length) - 1;
      rndString = rndString + stringArray[rndNum];
    };
    return rndString;
  }

  setLogin(){
    this.local.setItem("isLogin", "true");
    this.local.setItem("token", this.generateToken());
  }

  doLogin(data: {email: string, password: string}){
    if(this.loginData.email === data.email && this.loginData.password === data.password){
      this.setLogin();
      return {success: true, message: "Login Successfull."};
    }else if(this.loginData.email !== data.email){
      return {success: false, message: "Email does not exist."};
    }else if(this.loginData.password !== data.password){
      return {success: false, message: "Password Does not Matched."};
    }
  }

  doLogOut(){
    localStorage.removeItem("isLogin");
    localStorage.removeItem("token");
    return true;
  }

}
