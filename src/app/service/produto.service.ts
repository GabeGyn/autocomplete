import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpClient } from '../customHTTPClient';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private client: CustomHttpClient) { }

  buscarListaProduto(): Observable<any> {
    return this.client.get('/produto/buscarListaProduto/'+1);
  }

  buscaRegistroProduto(descricao: string): Observable<any> {
    return this.client.get(`/produto/buscarProdutoPorDescricao/${descricao}`);
  }
}