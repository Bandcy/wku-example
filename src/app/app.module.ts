import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from "./app.component";
import { PatientComponent } from './patient.component';
import { PatientService } from '../services/patient.service';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
