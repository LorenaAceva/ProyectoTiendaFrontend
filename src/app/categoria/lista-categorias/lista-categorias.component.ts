import { Component } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../service/categoria.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent {

  categorias: Categoria[] = [];

  constructor(private conexion: CategoriaService) {
    const dato: Observable<any> = this.conexion.ListarCategorias("categorias");


    dato.subscribe((resp: any) => {

      this.categorias = resp as Categoria[];
      console.log(this.categorias);

    })

  }
}
