import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbButtonModule, NbCardModule, NbContextMenuModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbLayoutModule, NbListModule, NbMenuModule, NbSidebarModule, NbStepperModule, NbThemeModule, NbToastrModule, NbUserModule, NbWindowModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CustomHttpClient } from './customHTTPClient';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AutocompleteModule } from './autocomplete/autocomplete.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    AutocompleteModule,
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    HttpClientModule,
    NbButtonModule,
    NbCardModule,
    NbContextMenuModule,
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbLayoutModule,
    NbListModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbStepperModule,
    NbThemeModule.forRoot(),
    NbToastrModule.forRoot(),
    NbUserModule,
    NbWindowModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [CustomHttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
