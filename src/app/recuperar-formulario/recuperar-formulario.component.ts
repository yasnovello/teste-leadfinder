import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Formulario } from 'src/model/formulario';
@Component({
  selector: 'app-recuperar-formulario',
  templateUrl: './recuperar-formulario.component.html',
  styleUrls: ['./recuperar-formulario.component.css']
})
export class RecuperarFormularioComponent implements OnInit {

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

