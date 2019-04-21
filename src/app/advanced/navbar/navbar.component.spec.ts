import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as doctors link`, () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const elements = fixture.debugElement.queryAll( By.directive(RouterLinkWithHref) );
    let exist = false;
    for (const elem of elements) {
      if (elem.attributes['routerLink'] === '/doctors') {
        exist = true;
        break;
      }
    }

    expect(exist).toBeTruthy();
  });

});
