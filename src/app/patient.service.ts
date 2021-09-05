import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }

  getPatients(): Observable<Patient[]> {
    return of([
      {
        firstName: "Sam",
        lastName: "Harris",
        age: 35,
        condition: "Fever"
      },
      {
        firstName: "Josh",
        lastName: "Lyman",
        age: 17,
        condition: "Heart attack"
      },
      {
        firstName: "Toby",
        lastName: "Ziegler",
        age: 82,
        condition: "Stroke"
      },
    ]);
  }
}
