import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit, OnDestroy {

  categoriaSubscription!: Subscription;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
  }

  getCategorias(){
    this.categoriaSubscription = this.categoriaService.getCategorias().subscribe(
      res => {
        console.log('res');
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnDestroy(): void {
    this.categoriaSubscription?.unsubscribe();
  }

}
