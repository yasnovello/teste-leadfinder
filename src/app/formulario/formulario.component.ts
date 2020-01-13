import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Formulario } from 'src/model/formulario';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  displayedColumns: string[] = ['Codigo', 'Id', 'Quest', 'Nome'];
  dataSource: Formulario[];
  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getFormularios()

      .subscribe(res => {

        this.dataSource = res;

        console.log(this.dataSource);

        //this.isLoadingResults = false;

      }, err => {

        console.log(err);

        // this.isLoadingResults = false;

      });
  }

}
