import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorComponent } from './doctor.component';
import { DoctorService } from './doctor.service';
import { HttpClientModule } from '@angular/common/http';

describe('DoctorComponent', () => {
  let component: DoctorComponent;
  let fixture: ComponentFixture<DoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorComponent ],
      providers: [ DoctorService ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Return Hello Doctor 001', () => {
    const mook = 'Doctor 001'
    const resp = component.sayHello(mook);
    expect( resp ).toBe(`Hello ${mook}`);
  });

});
