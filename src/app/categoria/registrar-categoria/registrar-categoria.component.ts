import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../categoria';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-registrar-categoria',
  templateUrl: './registrar-categoria.component.html',
  styleUrls: ['./registrar-categoria.component.css']
})
export class RegistrarCategoriaComponent implements OnInit{

  categoria: Categoria = { id_categoria: 0, cat_nombre: '', cat_descripcion: '' };


  //categoria: Categoria[]=[];
  constructor(private conexion: CategoriaService, private router: Router, private route: ActivatedRoute,private http: HttpClient) {
    const dato: Observable<any> = this.conexion.RegistroCategorias("categorias/registro",this.categoria);

    dato.subscribe((resp: any) => {

      if(resp.codigo==200){
      this.categoria = resp as Categoria;
      console.log(this.categoria);
    }
    })

  }

  //Usamos el método ngOnInit para visualizar en los componentes antes de que se muestre en la vista
  
  ngOnInit():void{
    
  }
  /**
   * 
   * Método para guardar las categorias al registrar
   * 
   * Convertimos el arreglo de objetos Categoria en una cadena de texto utilizando el método JSON.stringify()
   * 
   */

  guardarCategoria() {
    // const categoriasString = JSON.stringify(this.categoria);
    // this.conexion.RegistroCategorias('categorias/registro', this.categoria).subscribe(dato => {
    //   console.log(dato);
    //   this.irInicio();
    // });
    const url = 'http://localhost:8080/categorias/registro';
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  const categoriaJson = JSON.stringify(this.categoria);

  this.http.post(url, categoriaJson, { headers })
    .subscribe((response) => {
      console.log(response);
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
