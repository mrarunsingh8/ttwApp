import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatalogToolsPage } from './catalog-tools';
import {TestimonialPage} from "./testimonial/testimonial";
import {ComponentsModule} from "../../components/components.module";
import {DirectivesModule} from "../../directives/directives.module";
import {AddTestimonialPage} from "./add-testimonial/add-testimonial";
import {PhotoGalleryPage} from "./photo-gallery/photo-gallery";
import {AddPhotoGalleryPage} from "./add-photo-gallery/add-photo-gallery";

@NgModule({
  declarations: [
    CatalogToolsPage,
    TestimonialPage,
    AddTestimonialPage,
    PhotoGalleryPage,
    AddPhotoGalleryPage
  ],
  imports: [
    IonicPageModule.forChild(CatalogToolsPage),
    ComponentsModule,
    DirectivesModule
  ],
  entryComponents: [
    TestimonialPage,
    AddTestimonialPage,
    PhotoGalleryPage,
    AddPhotoGalleryPage
  ]
})
export class CatalogToolsPageModule {}
