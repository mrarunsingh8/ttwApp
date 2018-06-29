import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

/**
 * Generated class for the IonRepeatDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[ionRepeat]' // Attribute selector
})
export class IonRepeatDirective {



  constructor(private viewContainerref: ViewContainerRef, private templateRef: TemplateRef<any>) {
    console.log('Hello IonRepeatDirective Directive');
  }

  @Input("ionRepeat")
  set times(times: number){
    for(let i=0; i< times; i++){
      this.viewContainerref.createEmbeddedView(this.templateRef, {index: i});
    }
  }

}
