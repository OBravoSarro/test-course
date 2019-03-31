import { IncrementadorComponent } from "./incrementador.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

describe('Incremendator Component Unit', () => {

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

    it( 'the progress must be progress + mook', () => {
        const mook = 5;
        const resultExpect = component.progreso + mook;
        component.cambiarValor(mook);
        expect(component.progreso).toBe(resultExpect);
    });

    it( 'the progress must not be greater than 100', () => {
        const mook = 200;
        const resultExpect = 100;
        component.cambiarValor(mook);
        expect(component.progreso).toBe(resultExpect);
    });

    it( 'the progress must be progress + -mook', () => {
        const mook = -5;
        const resultExpect = component.progreso + mook;
        component.cambiarValor(mook);
        expect(component.progreso).toBe(resultExpect);
    });

    it( 'progress must not be less than 100', () => {
        const mook = -200;
        const resultExpect = 0;
        component.cambiarValor(mook);
        expect(component.progreso).toBe(resultExpect);
    });

});