import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeadsPage } from './leads';
import {MenuHeaderPageModule} from "../menu-header/menu-header.module";
import {AllLeadsPage} from "./all-leads/all-leads";
import {UpdateLeadPage} from "./update-lead/update-lead";
import {TrackEmailPage} from "./track-email/track-email";
import {LeadDetailPage} from "./lead-detail/lead-detail";
import {SendEmailPage} from "./send-email/send-email";
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    LeadsPage,
    AllLeadsPage,
    UpdateLeadPage,
    TrackEmailPage,
    LeadDetailPage,
    SendEmailPage,
  ],
  imports: [
    IonicPageModule.forChild(LeadsPage),
    MenuHeaderPageModule,
    ComponentsModule
  ],
  entryComponents: [
    AllLeadsPage,
    UpdateLeadPage,
    TrackEmailPage,
    LeadDetailPage,
    SendEmailPage,
  ]
})
export class LeadsPageModule {}
