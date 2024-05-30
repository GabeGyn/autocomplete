import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent, children:[
    {
      path:'autocomplete-produto',
      loadChildren:() => import('src/app/autocomplete-produto/autocomplete-produto.module').then(
        (m) => m.AutocompleteProdutoModule
      ),
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }