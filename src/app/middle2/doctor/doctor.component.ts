import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: []
})
export class DoctorComponent implements OnInit {

  doctors: any = [];

  constructor( private _doctor: DoctorService ) { }

  ngOnInit() {
  }

  sayHello(name: string) {
    return `Hello ${name}`;
  }

  getDoctors() {
    this._doctor.getDoctors().subscribe( doctors => this.doctors = doctors );
  }

}
