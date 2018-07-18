import { Component, Input } from '@angular/core';
import { IPatient } from '../services/patient.service';

@Component({
    selector: 'patient',
    templateUrl: './patient.component.html'
})
export class PatientComponent {

    @Input() items: Array<IPatient>;

    constructor() {
    }
}
