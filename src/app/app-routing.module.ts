import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent, children:[
    {
      path:'autocomplete',
      loadChildren:() => import('src/app/autocomplete/autocomplete.module').then(
        (m) => m.AutocompleteModule
      ),
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }