import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterDoctorComponent } from './router-doctor.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';

class FakeRouter {
  navigate (params) { }
}
class FakeActivatedRoute {
  // params: Observable<any> = of({} as any);
  private subject = new Subject();
  push ( value ) {
    this.subject.next( value );
  }
  get params() {
    return this.subject.asObservable();
  }
}

describe('RouterDoctorComponent', () => {
  let component: RouterDoctorComponent;
  let fixture: ComponentFixture<RouterDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterDoctorComponent ],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to doctors when save', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.saveDoctor();
    expect(spy).toHaveBeenCalledWith( ['/doctors', '123'] );
  });

  it('should save id = new', () => {
    let component = fixture.componentInstance;
    const activateRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);
    const valueMock = 'new';
    const paramMock = {id: valueMock};

    activateRoute.push(paramMock);

    expect(component.id).toBe(valueMock);
  });

});
