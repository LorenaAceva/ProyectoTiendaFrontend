import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCategoriasComponent } from './categoria/lista-categorias/lista-categorias.component';
import { RegistrarCategoriaComponent } from './categoria/registrar-categoria/registrar-categoria.component';

const routes: Routes = [
  {path:'categorias',component:ListaCategoriasComponent},
  {path:'',redirectTo:'categorias',pathMatch:'full'},
  {path:'registro', component:RegistrarCategoriaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
