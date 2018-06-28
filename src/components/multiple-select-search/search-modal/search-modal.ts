import {Component} from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

/**
 * Generated class for the SearchModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-modal',
  templateUrl: 'search-modal.html'
})
export class SearchModalComponent {
  mainList: Array<{id: number, name: string}>=[];
  list: Array<{id:number, name: string}> = [];
  selectedValue: Array<{number}> = [];

  constructor(private viewCtr: ViewController, private params: NavParams) {
    this.mainList = this.params.get("list");
    this.list = this.mainList;
    this.selectedValue = this.params.get("selected");
  }

  onChangeCheckBox(event, item){
    if(event.checked){
      this.selectedValue.push(item.id);
    }else{
      this.selectedValue.splice(this.selectedValue.indexOf(item.id), 1);
    }
  }

  isChecked(item): boolean{
    return (this.selectedValue.indexOf(item.id) !== -1);
  }

  done(){
    this.viewCtr.dismiss({done: true, data: this.selectedValue});
  }

  closeModal(evt){
    this.viewCtr.dismiss({done: false, data: this.selectedValue});
  }

  doSearch(evt){
    let term = evt.target.value;
    this.list = this.mainList.filter((item)=>{
      let regex = new RegExp(term, 'i');
      if(regex.test(item.name)){
        return item;
      }
    });
  }

}
