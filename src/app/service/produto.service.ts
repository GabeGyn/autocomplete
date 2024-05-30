import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpClient } from '../customHTTPClient';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private client: CustomHttpClient) { }

  buscaRegistroProduto(descricao: string): Observable<any> {
    if(descricao){
      return this.client.get(`/produto/buscarProdutoPorDescricao/${descricao}`);
    }
    return this.client.get('/produto'); 
  } 
}