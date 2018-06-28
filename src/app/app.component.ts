import { Component, ViewChild } from '@angular/core';
import {MenuController, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LeadsPage} from "../pages/leads/leads";

import {ChangeEmailPage} from "../pages/change-email/change-email";
import {PurchaseHistoryPage} from "../pages/home/purchase-history/purchase-history";
import {ChangePasswordPage} from "../pages/change-password/change-password";
import {BuyLeadPage} from "../pages/home/buy-lead/buy-lead";
import {ManagePackagesPage} from "../pages/manage-packages/manage-packages";
import {AddPackagePage} from "../pages/manage-packages/add-package/add-package";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  acordianData: any;

  pages: Array<{title: string, component?: any, isOpen: boolean, subPages?: Array<{title: string, component: any, isLikeHome:boolean}>}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private menuCntoller: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Leads', component: LeadsPage, subPages:[], isOpen: false},
      { title: 'Purchase Credits', isOpen:false, subPages: [
          {title:'Buy Purchase Credit', component: BuyLeadPage, isLikeHome: false},
          {title:'Purchase History', component: PurchaseHistoryPage, isLikeHome: false}
        ]
      },
      { title: 'My Packages', isOpen:false, subPages: [
          {title:'Add Package', component: AddPackagePage, isLikeHome: false},
          {title:'Manage Package', component: ManagePackagesPage, isLikeHome: false},
          {title:'Add In Bulk', component: ListPage, isLikeHome: false}
        ]
      },
      { title: 'Tools', isOpen:false, subPages: [
          {title:'Premium Service', component: ListPage, isLikeHome: false},
          {title:'Manage Your Blog', component: ListPage, isLikeHome: false},
          {title:'Payment Details', component: ListPage, isLikeHome: false},
          {title:'Feedback', component: ListPage, isLikeHome: false},
          {title:'Recruitment Solution', component: ListPage, isLikeHome: false}
        ]
      },
      { title: 'Catalog Tools', isOpen:false, subPages: [
          {title:'Manage Testimonials', component: ListPage, isLikeHome: false},
          {title:'Catalog Photo Gallery', component: ListPage, isLikeHome: false},
          {title:'Manage Catalog Packages', component: ListPage, isLikeHome: false},
          {title:'Catalog Package Detail Setting', component: ListPage, isLikeHome: false},
          {title:'Catalog Hotel Category', component: ListPage, isLikeHome: false},
          {title:'Catalog Display Order', component: ListPage, isLikeHome: false},
          {title:'Remove Catalog Cache', component: ListPage, isLikeHome: false}
        ]
      },
      { title: 'My Profile', isOpen:false, subPages: [
          {title:'Contact Details', component: ListPage, isLikeHome: false},
          {title:'Company Profile', component: ListPage, isLikeHome: false},
          {title:'My Hotels', component: ListPage, isLikeHome: false},
          {title:'Profile Theme', component: ListPage, isLikeHome: false},
          {title:'Location Map', component: ListPage, isLikeHome: false}
        ]
      },
      { title: 'Setting', isOpen:false, subPages: [
          {title:'Change Password', component: ChangePasswordPage, isLikeHome: false},
          {title:'Change Email Request', component: ChangeEmailPage, isLikeHome: false},
          {title:'Company Factsheets', component: ListPage, isLikeHome: true},
          {title:'Remove My Account', component: ListPage, isLikeHome: true},
          {title:'My Signature', component: ListPage, isLikeHome: true}
        ]
      },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(typeof page.component == 'function'){
      this.nav.setRoot(page.component);
    }
  }

  openDashboard(){
    this.nav.setRoot(HomePage);
  }

  navigateTo(page){
    this.menuCntoller.close();
    if(page.isLikeHome){
      this.openPage(page);
    }else{
      this.nav.push(page.component)
    }
  }

  toggleAccordian(page){
    if(page.subPages.length > 0){
      this.pages = this.pages.map(function(i){
        if(page == i){
          i.isOpen = !page.isOpen;
        }else{
          i.isOpen = false;
        }
        return i;
      });
    }else if(typeof page.component === 'function'){
      this.menuCntoller.close();
      if(page.isLikeHome){
		  this.openPage(page);
	  }else{
		  this.nav.push(page.component);
	  }
    }
  }
}
