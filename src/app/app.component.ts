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
import {BulkTourPackagePage} from "../pages/manage-packages/bulk-tour-package/bulk-tour-package";
import {ToolsPage} from "../pages/tools/tools";
import {FeedBackPage} from "../pages/tools/feed-back/feed-back";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {TestimonialPage} from "../pages/catalog-tools/testimonial/testimonial";
import {PhotoGalleryPage} from "../pages/catalog-tools/photo-gallery/photo-gallery";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  acordianData: any;

  pages: Array<{title: string, component?: any, isOpen: boolean, subPages?: Array<{title: string, component: any, type:string}>}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private menuCntoller: MenuController, private inAppBrowser: InAppBrowser) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Leads', component: LeadsPage, subPages:[], isOpen: false},
      { title: 'Purchase Credits', isOpen:false, subPages: [
          {title:'Buy Purchase Credit', component: BuyLeadPage, type: 'page'},
          {title:'Purchase History', component: PurchaseHistoryPage, type: 'page'}
        ]
      },
      { title: 'My Packages', isOpen:false, subPages: [
          {title:'Add Package', component: AddPackagePage, type: 'page'},
          {title:'Manage Package', component: ManagePackagesPage, type: 'page'},
          {title:'Add In Bulk', component: BulkTourPackagePage, type: 'page'}
        ]
      },
      { title: 'Tools', isOpen:false, subPages: [
          {title:'Premium Service', component: ToolsPage, type: 'page'},
          {title:'Manage Your Blog', component: 'http://catalog.weblink.in/members/index.php?id=ttw_blog&mi=496510&un=f6a9aa02db&pn=96e7921896&src=ttw&mem_type=pl&oi=39520&csession=ltsj6pup5gqglc3hb7dhqob5h2', type: 'browser'},
          {title:'Payment Details', component: 'http://www.weblink.in/accounts/?aty=dHR3&aid=NDk2NTEw', type: 'browser'},
          {title:'Feedback', component: FeedBackPage, type: 'page'},
          {title:'Recruitment Solution', component: 'http://www.betattw.in/members/jobs/', type: 'browser'}
        ]
      },
      { title: 'Catalog Tools', isOpen:false, subPages: [
          {title:'Manage Testimonials', component: TestimonialPage, type: 'page'},
          {title:'Catalog Photo Gallery', component: PhotoGalleryPage, type: 'page'},
          {title:'Manage Catalog Packages', component: ListPage, type: 'page'},
          {title:'Catalog Package Detail Setting', component: ListPage, type: 'page'},
          {title:'Catalog Hotel Category', component: ListPage, type: 'page'},
          {title:'Catalog Display Order', component: ListPage, type: 'page'},
          {title:'Remove Catalog Cache', component: ListPage, type: 'page'}
        ]
      },
      { title: 'My Profile', isOpen:false, subPages: [
          {title:'Contact Details', component: ListPage, type: 'page'},
          {title:'Company Profile', component: ListPage, type: 'page'},
          {title:'My Hotels', component: ListPage, type: 'page'},
          {title:'Profile Theme', component: 'http://www.betattw.in/travel-agents/sachin-cars-496510/', type: 'browser'},
          {title:'Location Map', component: ListPage, type: 'page'}
        ]
      },
      { title: 'Setting', isOpen:false, subPages: [
          {title:'Change Password', component: ChangePasswordPage, type: 'page'},
          {title:'Change Email Request', component: ChangeEmailPage, type: 'page'},
          {title:'Company Factsheets', component: ListPage, type: 'home'},
          {title:'Remove My Account', component: ListPage, type: 'home'},
          {title:'My Signature', component: ListPage, type: 'home'}
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

  openInBrowser(url: string){
    let browser = this.inAppBrowser.create(url);
    browser.show();
  }

  navigateTo(page){
    this.menuCntoller.close();
    if(page.type == 'home'){
      this.openPage(page);
    }else if(page.type == 'page'){
      this.nav.push(page.component)
    }else{
      this.openInBrowser(page.component);
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
