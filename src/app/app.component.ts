import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaService } from './categoria/service/categoria.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tienda de Incienso';
  categorias: any[] = [];

  
}
