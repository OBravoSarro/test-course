import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it(`should have as legend 1`, () => {
        component.leyenda = 'Progress';
        fixture.detectChanges();
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(elem.innerHTML).toContain('Progress');
    });

    it(`should have as legend 2`, () => {
        component.leyenda = 'Progress';
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h3').textContent).toContain('Progress');
    });

    it(`must show the program value in the input`, () => {
        component.cambiarValor(5);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('input').value).toBe('55');
        });
    });

    it(`must increase / decrease by 5, with a click on the button`, () => {
        const buttons = fixture.debugElement.nativeElement.querySelectorAll('.btn-primary');
        let resultToExpect = component.progreso - 5;
        buttons[0].click();
        expect(component.progreso).toBe(resultToExpect);
        resultToExpect = component.progreso + 5;
        buttons[1].click();
        expect(component.progreso).toBe(resultToExpect);
    });

    it(`must increase / decrease by 5, with a click on the button and legend change`, () => {
        const buttons = fixture.debugElement.nativeElement.querySelectorAll('.btn-primary');
        const legend = fixture.debugElement.nativeElement.querySelector('h3');
        let resultToExpect = component.progreso - 5;
        buttons[0].click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(legend.textContent).toContain(resultToExpect);
            resultToExpect = component.progreso + 5;
            buttons[1].click();
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(legend.textContent).toContain(resultToExpect);
            });
        });
    });

});
