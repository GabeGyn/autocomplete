import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'autocomplete-produto',
    loadChildren:() => import('src/app/autocomplete-produto/autocomplete-produto.module').then(
      (m) => m.AutocompleteProdutoModule
    ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }