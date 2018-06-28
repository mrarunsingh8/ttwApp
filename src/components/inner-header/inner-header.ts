import { Component } from '@angular/core';

/**
 * Generated class for the InnerHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'inner-header',
  templateUrl: 'inner-header.html'
})
export class InnerHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello InnerHeaderComponent Component');
    this.text = 'Hello World';
  }

}
