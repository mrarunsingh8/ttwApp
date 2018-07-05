import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagePackagesPage } from './manage-packages';
import {ComponentsModule} from "../../components/components.module";
import {TooltipsModule} from "ionic-tooltips";
import {AddPackagePage} from "./add-package/add-package";
import {MultipleSelectSearchModule} from "../../components/multiple-select-search/multiple-select-search.module";
import {ImageGalleryPage} from "./image-gallery/image-gallery";
import {AddPricePage} from "./add-price/add-price";
import {DayItineraryPage} from "./day-itinerary/day-itinerary";
import {UpdateItineraryPage} from "./update-itinerary/update-itinerary";
import {PackageRateCardPage} from "./package-rate-card/package-rate-card";
import {PackageRateCardUpdatePage} from "./package-rate-card-update/package-rate-card-update";
import {PackageRateCardTablePage} from "./package-rate-card-table/package-rate-card-table";
import {DirectivesModule} from "../../directives/directives.module";
import {BulkTourPackagePage} from "./bulk-tour-package/bulk-tour-package";
import {PackagesProvider} from "./shared/packages";

@NgModule({
  declarations: [
    ManagePackagesPage,
    AddPackagePage,
    ImageGalleryPage,
    AddPricePage,
    DayItineraryPage,
    UpdateItineraryPage,
    PackageRateCardPage,
    PackageRateCardUpdatePage,
    PackageRateCardTablePage,
    BulkTourPackagePage
  ],
  imports: [
    IonicPageModule.forChild(ManagePackagesPage),
    ComponentsModule,
    DirectivesModule,
    TooltipsModule,
    MultipleSelectSearchModule
  ],
  providers: [PackagesProvider],
  entryComponents: [
    AddPackagePage,
    ImageGalleryPage,
    AddPricePage,
    DayItineraryPage,
    UpdateItineraryPage,
    PackageRateCardPage,
    PackageRateCardUpdatePage,
    PackageRateCardTablePage,
    BulkTourPackagePage
  ]
})
export class ManagePackagesPageModule {}

