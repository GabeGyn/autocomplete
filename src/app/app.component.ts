import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './service/produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private produtoService: ProdutoService) {}

  options: any[] = [];
  selecionaProduto: any;

  ngOnInit() {
    this.produtoService.buscarListaProduto().subscribe((ret) => { this.options = ret; })
  }

  teste() {
    console.log(this.selecionaProduto)
  }
}