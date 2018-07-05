import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import {HttpClientModule} from "@angular/common/http";
import {LoginPageModule} from "../pages/login/login.module";
import {PopoverRightMenuPageModule} from "../pages/popover-right-menu/popover-right-menu.module";
import {MenuHeaderPageModule} from "../pages/menu-header/menu-header.module";
import {ChangeEmailPageModule} from "../pages/change-email/change-email.module";
import {ChangePasswordPageModule} from "../pages/change-password/change-password.module";
import {AdvertisePageModule} from "../pages/advertise/advertise.module";
import {LeadsPageModule} from "../pages/leads/leads.module";
import {PurchaseHistoryPage} from "../pages/home/purchase-history/purchase-history";
import {BuyLeadPage} from "../pages/home/buy-lead/buy-lead";
import {ComponentsModule} from "../components/components.module";
import {ManagePackagesPageModule} from "../pages/manage-packages/manage-packages.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToolsPageModule} from "../pages/tools/tools.module";
import {CatalogToolsPageModule} from "../pages/catalog-tools/catalog-tools.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PurchaseHistoryPage,
    BuyLeadPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    MenuHeaderPageModule,
    LoginPageModule,
    PopoverRightMenuPageModule,
    ChangeEmailPageModule,
    ChangePasswordPageModule,
    AdvertisePageModule,
    LeadsPageModule,
    ComponentsModule,
    ManagePackagesPageModule,
    ToolsPageModule,
    CatalogToolsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PurchaseHistoryPage,
    BuyLeadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    InAppBrowser
  ]
})
export class AppModule {}
