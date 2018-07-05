import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToolsPage } from './tools';
import {ComponentsModule} from "../../components/components.module";
import {ToolsProvider} from "./Shared/tools/tools";
import {FeedBackPage} from "./feed-back/feed-back";

@NgModule({
  declarations: [
    ToolsPage,
    FeedBackPage
  ],
  imports: [
    IonicPageModule.forChild(ToolsPage),
    ComponentsModule
  ],
  providers: [ToolsProvider],
  entryComponents: [
    ToolsPage,
    FeedBackPage
  ]
})
export class ToolsPageModule {}
