import { NgModule } from '@angular/core';
import {MultipleSelectSearchComponent} from "./multiple-select-search";
import {IonicPageModule} from "ionic-angular";
import {SearchModalComponent} from "./search-modal/search-modal";
@NgModule({
	declarations: [
	  MultipleSelectSearchComponent,
    SearchModalComponent
  ],
	imports: [
	  IonicPageModule.forChild(MultipleSelectSearchComponent),
    IonicPageModule.forChild(SearchModalComponent)
  ],
	exports: [
	  MultipleSelectSearchComponent,
    SearchModalComponent
  ],
  entryComponents: [
    SearchModalComponent
  ]
})
export class MultipleSelectSearchModule {}
