import { Component, AfterViewInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PackagesProvider} from "../shared/packages";

/**
 * Generated class for the AddPackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-package',
  templateUrl: 'add-package.html',
})
export class AddPackagePage implements AfterViewInit{

  packageCostBy: number = 1;
  cityList: Array<{id:number, name: string}>=[];
  inclusionsList: Array<{id: number, name: string}> = [];
  selectedCity: Array<number> = [1,2,4,6,7];
  packageDuration: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
  packageThemeTag: Array<{id: number, name: string}>=[];
  packageDate: {from: {date: string, month: string}, to: {date: string, month: string}}= {
    from: {
      date: '',
      month: ''
    },
    to: {
      date: '',
      month: ''
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private packageProvider: PackagesProvider) {

  }

  ngAfterViewInit(){
    this.packageProvider.getCityList().subscribe((data)=>{
      this.cityList = data;
    });
    this.packageProvider.getPackageInclusionList().subscribe((data)=>{
      this.inclusionsList = data;
    });
    this.packageProvider.getThemeTagList().subscribe((data)=>{
      this.packageThemeTag = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPackagePage');
  }

  onCityChange(data){
    this.selectedCity = data;
  }

}
