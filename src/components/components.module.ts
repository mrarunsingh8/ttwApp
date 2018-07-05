import { NgModule } from '@angular/core';
import { FormErrorComponent } from './form-error/form-error';
import { InnerHeaderComponent } from './inner-header/inner-header';
import {IonicPageModule} from "ionic-angular";
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { PremiumServiceFilterComponent } from './premium-service-filter/premium-service-filter';

@NgModule({
	declarations: [
	  FormErrorComponent,
    InnerHeaderComponent,
    ProgressBarComponent,
    PremiumServiceFilterComponent,
  ],
	imports: [
	  IonicPageModule.forChild(InnerHeaderComponent),
    IonicPageModule.forChild(ProgressBarComponent),
    IonicPageModule.forChild(PremiumServiceFilterComponent)
  ],
	exports: [
	  FormErrorComponent,
    InnerHeaderComponent,
    ProgressBarComponent,
    PremiumServiceFilterComponent,
  ],
})
export class ComponentsModule {}
