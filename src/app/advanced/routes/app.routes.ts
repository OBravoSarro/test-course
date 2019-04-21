import { Routes } from '@angular/router';
import { DoctorComponent } from '../../middle2/doctor/doctor.component';
import { IncrementadorComponent } from '../../middle2/incrementador/incrementador.component';

export const ROUTES: Routes = [
    {path: 'doctor', component: DoctorComponent},
    {path: 'incrementator', component: IncrementadorComponent},
    {path: '**', component: IncrementadorComponent}
];