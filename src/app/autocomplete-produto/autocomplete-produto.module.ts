import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteProdutoComponent } from './autocomplete-produto.component';
import { NbAutocompleteModule, NbInputModule, NbFormFieldModule, NbButtonModule, NbIconModule, NbSelectModule } from '@nebular/theme';

@NgModule({
  declarations: [ AutocompleteProdutoComponent ],
  imports: [
    CommonModule,
    FormsModule,
    NbAutocompleteModule,
    NbInputModule,
    ReactiveFormsModule,
    NbFormFieldModule,
    NbButtonModule,
    NbIconModule,
    NbSelectModule
  ],
  exports: [AutocompleteProdutoComponent]
})
export class AutocompleteProdutoModule { }