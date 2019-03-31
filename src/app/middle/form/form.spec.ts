import { FormRegister } from './form';
import { FormBuilder } from '@angular/forms';


describe('Form test', () => {

    let formComponent: FormRegister;

    beforeEach( () =>  formComponent = new FormRegister( new FormBuilder() ));

    it('A form with two fields must be created', () => {
        expect( formComponent.form.contains('email')).toBeTruthy();
        expect( formComponent.form.contains('password')).toBeTruthy();
    });

    it('Email required', () => {
        const field = formComponent.form.get('email');
        field.setValue('');
        expect( field.valid ).toBeFalsy();
    });

    it('Email not valid', () => {
        const field = formComponent.form.get('email');
        field.setValue('email@');
        expect( field.valid ).toBeFalsy();
    });

    it('Email valid', () => {
        const field = formComponent.form.get('email');
        field.setValue('email@email.com');
        expect( field.valid ).toBeTruthy();
    });

    it('Password required', () => {
        const field = formComponent.form.get('password');
        field.setValue('');
        expect( field.valid ).toBeFalsy();
    });

});