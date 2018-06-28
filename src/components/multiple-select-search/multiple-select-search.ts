import {Component, EventEmitter, Input, Output, OnChanges} from '@angular/core';
import {LoadingController, ModalController} from "ionic-angular";
import {SearchModalComponent} from "./search-modal/search-modal";

/**
 * Generated class for the MultipleSelectSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'multiple-select-search',
  templateUrl: 'multiple-select-search.html'
})
export class MultipleSelectSearchComponent implements OnChanges{
  @Input() list: any = [];
  @Input() selected: any = [];
  @Input() title: string = 'Item';
  @Output() onChange = new EventEmitter<any>();

  selectedListListForView: Array<string>=[];

  constructor(private modalController: ModalController, private loadingCtr: LoadingController) {
    this.setSelectedList();
  }
  ngOnChanges(){
    this.setSelectedList();
  }

  setSelectedList(){
    this.selectedListListForView = [];
    let data: any = this.list.filter((itemData)=>{
      if(this.selected.indexOf(itemData.id) !== -1){
        return itemData;
      }
    });
    if(typeof data[0] != "undefined"){
      this.selectedListListForView.push(data[0].name);
    }
    if(typeof data[1] != "undefined"){
      this.selectedListListForView.push(data[1].name);
    }
    if(data.length > 2){
      this.selectedListListForView.push("+ "+(data.length-2)+" More");
    }
  }

  openModals(){
    let loader = this.loadingCtr.create({
      content: "Please wait..."
    });
    loader.present().then(()=>{
      let modal = this.modalController.create(SearchModalComponent, {list: this.list, selected: this.selected});
      modal.onDidDismiss((params)=>{
        if(params.done){
          this.selected = params.data;
          this.setSelectedList();
          this.onChange.emit(this.selected);
        }
      });
      modal.present().then(()=>{
        loader.dismissAll();
      });
    });
  }
}
