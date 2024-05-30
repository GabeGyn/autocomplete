import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, startWith, switchMap } from 'rxjs';
import { ProdutoService } from './service/produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor( private produtoService: ProdutoService ) {}

  selecionaProduto: any;
  filtraProduto$: Observable<any[]> = new Observable();
  inputProduto: FormControl = new FormControl();

  ngOnInit() {
    console.log(this.selecionaProduto)
    this.filtraProduto$ = this.inputProduto.valueChanges
    .pipe(startWith(' '), debounceTime(1000),
      switchMap((valorBuscado: any) => {
        return this.produtoService.buscaRegistroProduto(encodeURIComponent(valorBuscado));
      })
    );
  }
}