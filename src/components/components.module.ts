import { NgModule } from '@angular/core';
import { FormErrorComponent } from './form-error/form-error';
import { InnerHeaderComponent } from './inner-header/inner-header';
import {IonicPageModule} from "ionic-angular";
import { ProgressBarComponent } from './progress-bar/progress-bar';
@NgModule({
	declarations: [
	  FormErrorComponent,
    InnerHeaderComponent,
    ProgressBarComponent,
  ],
	imports: [
	  IonicPageModule.forChild(InnerHeaderComponent),
    IonicPageModule.forChild(ProgressBarComponent),
  ],
	exports: [
	  FormErrorComponent,
    InnerHeaderComponent,
    ProgressBarComponent,
  ],
})
export class ComponentsModule {}
