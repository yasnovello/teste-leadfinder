import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Formulario } from 'src/model/formulario';


const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};

const apiUrl = 'https://inbound.leadfinder.com.br/#/formulario/B516E6CDD1';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getFormularios(): Observable<Formulario[]> {
    return this.http.get<Formulario[]>(apiUrl)
      .pipe(
        tap(formulario => console.log("achou o form")),
        catchError(this.handleError('getProdutos', []))
      )
  }
  getFormulario(id: number): Observable<Formulario> {

    const url = `${apiUrl}/${id}`;

    return this.http.get<Formulario>(url).pipe(

      tap(_ => console.log(`leu o formulario id=${id}`)),
      catchError(this.handleError<Formulario>(`getFormulario id=${id}`))
    );
  }
  enviarFormulario(formulario): Observable<Formulario> {
    return this.http.post<Formulario>(apiUrl, formulario, httpOptions).pipe(

      // tslint:disable-next-line:no-shadowed-variable

      tap((formulario: Formulario) => console.log(`adicionou o form com w/ id=${formulario.id_formulario}`)),

      catchError(this.handleError<Formulario>('enviarFormulario'))

    );
  }
  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
