import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosComponent } from './middle/spy/medicos.component';
import { DoctorComponent } from './middle2/doctor/doctor.component';
import { DoctorService } from './middle2/doctor/doctor.service';
import { IncrementadorComponent } from './middle2/incrementador/incrementador.component';
import { NavbarComponent } from './advanced/navbar/navbar.component';
import { RouterDoctorComponent } from './advanced/router-doctor/router-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpClientModule,
    MedicosComponent,
    IncrementadorComponent,
    DoctorComponent,
    NavbarComponent,
    RouterDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DoctorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
