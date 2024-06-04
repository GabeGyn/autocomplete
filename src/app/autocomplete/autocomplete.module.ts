import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAutocompleteModule, NbInputModule, NbFormFieldModule, NbButtonModule, NbIconModule, NbSelectModule } from '@nebular/theme';
import { AutocompleteComponent } from './autocomplete.component';

@NgModule({
  declarations: [ AutocompleteComponent ],
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
  exports: [AutocompleteComponent]
})
export class AutocompleteModule { }