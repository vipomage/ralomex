import { Component, Input } from '@angular/core';
import { FireService } from '../../../tools/services/fire.service';

@Component({
  selector: 'app-mdb-editable-table',
  templateUrl: './mdb-editable-table.component.html',
  styleUrls: ['./mdb-editable-table.component.css'],
})
export class MdbEditableTableComponent {
  @Input() category: string;
  @Input() subCategory: string;
  @Input() collection;
  editField: string;
  changeExist: boolean = false;

  constructor(private db: FireService) {}

  updateList(id: string, property: string, event: any) {
    const editField = event.target.textContent;
    let val = {};
    //check if value changed
    if (this.changeExist) {
      //Value Changed
      val[property] = editField;
      this.db.PloughUtils.updatePlough(val, this.category, this.subCategory, id)
        .then(() => {
          this.collection[id][property] = editField;
          this.changeExist = false;
          //todo notification
        })
        .catch(e => console.log(e.message));
    }
  }

  remove(id: any) {
    if(window.confirm('Сигурни ли сте че искате да изтриете този продукт?'))
    this.db.PloughUtils.deletePlough(this.category, this.subCategory, id)
      .then(() => {
        //notification
        delete this.collection[id]
        document.getElementById(id).remove();
      })
      .catch((e: ErrorEvent) => console.log(e.message));
  }

  changeValue(event: any) {
    this.editField = event.target.textContent;
    this.changeExist = true;
  }
}
