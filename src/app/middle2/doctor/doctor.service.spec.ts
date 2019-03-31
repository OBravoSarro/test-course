import { TestBed } from '@angular/core/testing';

import { DoctorService } from './doctor.service';
import { HttpClientModule } from '@angular/common/http';

describe('DoctorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: DoctorService = TestBed.get(DoctorService);
    expect(service).toBeTruthy();
  });
});
