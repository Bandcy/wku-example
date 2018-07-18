import { Injectable, OnInit } from "../../node_modules/@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PatientService {

    dummy: Array<any> = [];
    doctors: Array<string> = ['Heewon', 'Jinsuk'];
    patientNames: Array<string> = ['Ethan', 'Jey', 'Suh'];

    constructor() {
        for (let i = 0; i < 10; i++) {
            this.dummy.push(<IPatient>{
                doctor: this.doctors[(i % 2)],
                name: this.patientNames[(i % 3)],
                gender: 'Male',
                age: Math.floor(Math.random() * (30 + i - 20) + 20),
            })
        }
    }

    getDoctors() {
        return this.doctors;
    }

    getPatient(doctor) {
        return Observable.of(this.dummy.filter(p => p.doctor === doctor));
    }
}

export interface IPatient {
    doctor: string;
    name: string;
    gender: string;
    age: number;
}