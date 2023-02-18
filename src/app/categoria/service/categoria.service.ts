import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';
import { Categoria } from '../categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  API_URL: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  //Con este método se listan todas las categorias
  ListarCategorias(url: string): Observable<any> {
    return this.http.get(this.API_URL + url).pipe(share());
  }

  //Con este método se registrará una nueva categoria
  RegistroCategorias(url: string, data: any): Observable<any> {
    return this.http.post(this.API_URL + url, data).pipe(share());
  }

  //Con este método podremos actualizar las categorias
  PutCategorias(url: string, data: any): Observable<any> {
    return this.http.put(this.API_URL + url).pipe(share());
  }

  //Con este método eliminaremos las categorias
  DeleteCategorias(url: string): Observable<any> {
    return this.http.delete(this.API_URL + url).pipe(share());
  }
}
