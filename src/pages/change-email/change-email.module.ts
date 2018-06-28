import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeEmailPage } from './change-email';
import {MenuHeaderPageModule} from "../menu-header/menu-header.module";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ChangeEmailPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeEmailPage),
    MenuHeaderPageModule,
    ComponentsModule
  ],
})
export class ChangeEmailPageModule {}
