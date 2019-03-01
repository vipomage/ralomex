import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { FireService } from '../../../tools/services/fire.service';

@Component({
  selector: 'app-mdb-table',
  templateUrl: './mdb-table.component.html',
  styleUrls: ['./mdb-table.component.css'],
})
export class MdbTableComponent implements OnInit {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  min: number;
  max: number;
  @Input() category;
  @Input() data: any;

  dtOptions: DataTables.Settings = {
    autoWidth: true,
  };

  constructor(private db: FireService) {}

  ngOnInit() {
    $(document).ready(function() {
      $('#dtBasicExample').DataTable({
        autoWidth: true,
        ordering: true,
      });
      $('.dataTables_length').addClass('bs-select');
    });
  }

  editItem = (key: string) =>
    this.db.editItem(key, this.category).subscribe(res => {
      console.log(res);
    });

  ngOnDestroy(): void {
    // We remove the last function in the global ext search array so we do not add the fn each time the component is drawn
    // /!\ This is not the ideal solution as other components may add other search function in this array, so be careful when
    // handling this global variable
    $.fn['dataTable'].ext.search.pop();
  }

  filterById(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }
}
