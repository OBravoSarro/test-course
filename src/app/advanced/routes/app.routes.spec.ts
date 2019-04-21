import { ROUTES } from './app.routes';
import { DoctorComponent } from '../../middle2/doctor/doctor.component';
describe ('Principal routes', () => {
    it('debe de exister la ruta doctor/:id', () => {
        expect( ROUTES ).toContain(
            {path: 'doctor', component: DoctorComponent},
        );
    });
});