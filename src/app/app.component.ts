import { Component, OnInit } from '@angular/core';
import { PatientService, IPatient } from '../services/patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedDoctor: string = '';
  doctors: Array<string> = [];
  patients: Array<IPatient> = [];

  constructor(private patientSvc: PatientService) { }

  ngOnInit() {
    this.doctors = this.patientSvc.getDoctors();
  }

  onSelect(doctor: string) {
    this.selectedDoctor = doctor;
    this.patientSvc.getPatient(doctor)
      .subscribe(response => {
        this.patients = response as Array<IPatient>;
        console.log(doctor + '\'s patients', this.patients);
      }, err => {
        console.error(err);
      }, () => { })
  }

  clear() {
    this.selectedDoctor = '';
    this.patients.length = 0;
  }
}
