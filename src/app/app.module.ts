import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCategoriasComponent } from './categoria/lista-categorias/lista-categorias.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, ROUTES } from '@angular/router';
import { CabeceraComponent } from './componentes/header/cabecera/cabecera.component';
import { PieComponent } from './componentes/footer/pie/pie.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RegistrarCategoriaComponent } from './categoria/registrar-categoria/registrar-categoria.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaCategoriasComponent,
    CabeceraComponent,
    PieComponent,
    MenuComponent,
    RegistrarCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
