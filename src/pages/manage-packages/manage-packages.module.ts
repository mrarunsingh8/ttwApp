import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagePackagesPage } from './manage-packages';
import {ComponentsModule} from "../../components/components.module";
import {TooltipsModule} from "ionic-tooltips";
import {AddPackagePage} from "./add-package/add-package";
import {MultipleSelectSearchModule} from "../../components/multiple-select-search/multiple-select-search.module";
import {ImageGalleryPage} from "./image-gallery/image-gallery";

@NgModule({
  declarations: [
    ManagePackagesPage,
    AddPackagePage,
    ImageGalleryPage
  ],
  imports: [
    IonicPageModule.forChild(ManagePackagesPage),
    ComponentsModule,
    TooltipsModule,
    MultipleSelectSearchModule
  ],
  entryComponents: [
    AddPackagePage,
    ImageGalleryPage
  ]
})
export class ManagePackagesPageModule {}
