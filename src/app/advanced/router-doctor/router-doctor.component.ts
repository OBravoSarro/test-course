import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-doctor',
  templateUrl: './router-doctor.component.html',
  styles: []
})
export class RouterDoctorComponent implements OnInit {

  id: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params && params.hasOwnProperty('id')){
        this.id = params.id;
      }
    });
  }

  public saveDoctor () {
    this.router.navigate(['/doctors', '123'])
  }

}
