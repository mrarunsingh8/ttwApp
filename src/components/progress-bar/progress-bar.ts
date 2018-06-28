import {Component, Input, OnInit} from '@angular/core';

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progress-bar',
  template: `<div ion-text class="progress-bar blue stripes">
                <span [ngStyle]="SpanStyle"></span>
              </div>
              <p align-items-center> {{percent}}% {{progressTitle}}</p>`
})
export class ProgressBarComponent implements OnInit{
  @Input("value") progressNumber: number;
  @Input() progressTitle: string = "Completed";
  percent: number = 0;
  SpanStyle: any = {width: "0%"};
  constructor() {
  }
  ngOnInit(){
    this.percent = this.progressNumber;
    this.SpanStyle.width = this.percent+"%";
  }

}
