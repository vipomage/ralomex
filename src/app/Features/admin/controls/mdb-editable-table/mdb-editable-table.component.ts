import { Component, Input } from '@angular/core';
import { FireService } from '../../../../Tools/services/fire.service';
import { ToastrService } from 'ngx-toastr';

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
  updatedRow: HTMLElement;

  constructor(private toastR: ToastrService, private db: FireService) {}

  updateList(id: string, property: string, event: any) {
    const editField = event.target.textContent;
    let val = {};
    if (this.changeExist) {
      val[property] = editField;
      this.db.PloughUtils.updatePlough(val, this.category, this.subCategory, id)
        .then(() => {
          this.collection[id][property] = editField;
          this.changeExist = false;
          this.updatedRow.removeAttribute('style');
          this.toastR.success(`${property.toUpperCase()}: ${editField}`, 'Saved!');
        })
        .catch(e => console.log(e.message));
    }
  }

  remove(id: any) {
    if (window.confirm('Сигурни ли сте че искате да изтриете този продукт?'))
      this.db.PloughUtils.deletePlough(this.category, this.subCategory, id)
        .then(() => {
          this.toastR.info('Item Deleted!');
          delete this.collection[id];
          document.getElementById(id).remove();
        })
        .catch((e: ErrorEvent) => console.log(e.message));
  }

  changeValue(event: any, id: string) {
    this.editField = event.target.textContent;
    this.updatedRow = document.getElementById(id);
    this.updatedRow.setAttribute('style', 'background-color:#00ff75;');
    this.changeExist = true;
  }
}
