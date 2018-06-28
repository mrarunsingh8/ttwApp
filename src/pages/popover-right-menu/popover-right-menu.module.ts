import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverRightMenuPage } from './popover-right-menu';

@NgModule({
  declarations: [
    PopoverRightMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverRightMenuPage),
  ]
})
export class PopoverRightMenuPageModule {}
