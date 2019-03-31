import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs/index';


describe('MedicosComponent', () => {

    let component: MedicosComponent;
    const service = new MedicosService( null );

    beforeEach( () => {
        component = new MedicosComponent( service );
    });

    it('Must call the server to get doctors', () => {
        const spy = spyOn( service, 'getMedicos' ).and.callFake(() => {
            return empty();
        });
        component.ngOnInit();
        expect( spy ).toHaveBeenCalled();

    });

    it('Init: Must load the doctors', () => {
        const mookDoctors = ['Medico1','Medico2','Medico3'];
        spyOn( service, 'getMedicos' ).and.callFake(() => {
            return from(mookDoctors);
        });
        component.ngOnInit();
        expect( component.medicos.length ).toBeGreaterThan(0);
    });

    it('Must call the server to add a doctor', () => {
        const spy = spyOn( service, 'agregarMedico' ).and.callFake(() => {
            return empty();
        });
        component.agregarMedico();
        expect( spy ).toHaveBeenCalled();
    });

    it('A new doctor must be added to the array', () => {
        const mookDoctor = {id: 1, name: 'Doctor 001'};
        spyOn( service, 'agregarMedico' ).and.returnValue(from([mookDoctor]));
        component.agregarMedico();
        expect( component.medicos.indexOf( mookDoctor )).toBeGreaterThanOrEqual(0);
    });

    it('If the add doctor fails, the message should be the same as the service message', () => {
        const myError = 'The doctor could not be added';
        spyOn(service, 'agregarMedico').and.returnValue(throwError(myError));
        component.agregarMedico();
        expect(component.mensajeError).toBe(myError);
    });

    it('Must call the server to delete a doctor', () => {
        spyOn( window, 'confirm' ).and.returnValue(true);
        const mookDoctor = {id: "1", name: 'Doctor 001'};
        const spy = spyOn( service, 'borrarMedico' ).and.callFake(() => {
            return empty();
        });
        component.borrarMedico(mookDoctor.id);
        expect( spy ).toHaveBeenCalledWith("1");
    });

    it('The server should not be called to delete a doctor', () => {
        spyOn( window, 'confirm' ).and.returnValue(false);
        const mookDoctor = {id: "1", name: 'Doctor 001'};
        const spy = spyOn( service, 'borrarMedico' ).and.callFake(() => {
            return empty();
        });
        component.borrarMedico(mookDoctor.id);
        expect( spy ).not.toHaveBeenCalledWith("1");
    });

});
