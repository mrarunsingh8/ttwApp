import { Component, Input } from '@angular/core';

/**
 * Generated class for the FormErrorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-error',
  templateUrl: 'form-error.html'
})
export class FormErrorComponent {

  @Input() fieldControl: any;
  @Input() title: string;

  constructor() {
  }

  isUpdated() {
    return this.fieldControl.dirty || this.fieldControl.touched;
  }

  isValid() {
    return this.fieldControl.invalid || this.fieldControl.untouched;
  }

  getMessage() {
    if(this.fieldControl.touched){
      if (this.fieldControl.errors && this.fieldControl.errors.required) {
        return this.title+' is required.';
      } else if (this.fieldControl.errors && this.fieldControl.errors.email) {
        return 'Enter valid Email';
      } else if (this.fieldControl.errors && this.fieldControl.errors.minlength) {
        return this.title+' must be min ' + this.fieldControl.errors.minlength.requiredLength + ' charecters';
      } else if (this.fieldControl.errors && this.fieldControl.errors.maxlength) {
        return this.title+' must be contain max ' + this.fieldControl.errors.maxlength.requiredLength + ' charecters';
      } else if (this.fieldControl.errors && this.fieldControl.errors.forbiddenName) {
        return this.title+' can not be ' + this.fieldControl.value;
      } else {
        return this.title;
      }
    }
    return this.title;
  }

}
