import { Component } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../categoria';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-categoria',
  templateUrl: './registrar-categoria.component.html',
  styleUrls: ['./registrar-categoria.component.css']
})
export class RegistrarCategoriaComponent {

  categoria: Categoria[] = [];


  constructor(private conexion: CategoriaService, private router: Router) {
    const dato: Observable<any> = this.conexion.RegistroCategorias("registro",this.categoria);

    dato.subscribe((resp: any) => {

      this.categoria = resp as Categoria[];
      console.log(this.categoria);

    })

  }

  /**
   * 
   * Método para guardar las categorias al registrar
   * 
   * Convertimos el arreglo de objetos Categoria en una cadena de texto utilizando el método JSON.stringify()
   * 
   */

  guardarCategoria() {
    const categoriasString = JSON.stringify(this.categoria);
    this.conexion.RegistroCategorias('registro',this.categoria).subscribe(dato => {
      console.log(dato);
      this.irInicio();
    });
  }

  //Método para volver al inicio al guardar el nuevo regitro
  irInicio() {
    this.router.navigate(['/categorias']);

  }

  //Método para enviar los formularios
  onSubmit() {
    this.guardarCategoria();

  }

}
