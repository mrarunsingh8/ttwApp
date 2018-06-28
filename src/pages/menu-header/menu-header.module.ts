import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuHeaderPage } from './menu-header';

@NgModule({
  declarations: [
    MenuHeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuHeaderPage),
  ],
  exports: [
    MenuHeaderPage
  ]
})
export class MenuHeaderPageModule {}
