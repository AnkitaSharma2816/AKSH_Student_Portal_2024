import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  lastName: string;
  subject: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Anamika', lastName: 'Agarwal', subject: 'CS'},
  {position: 2, name: 'Tiara', lastName: 'Khan', subject: 'BE'},
  {position: 3, name: 'Kiara', lastName: 'Sharma', subject: 'Arts'},
  {position: 4, name: 'Anubhav', lastName: 'Kumar', subject: 'BE'},
  {position: 5, name: 'Abhishek', lastName: 'Sharma', subject: 'Maths'},
  {position: 6, name: 'Pooja', lastName: 'Jha', subject: 'Geogrpahy'},
  {position: 7, name: 'Liza', lastName: 'Frendanze', subject: 'English'},
  {position: 8, name: 'Anuj', lastName: 'Kumar', subject: 'Hindi'},
  {position: 9, name: 'Manish', lastName: 'Dubey', subject: 'EVS'},
  {position: 10, name: 'Rajesh', lastName: 'Kumar', subject: 'Java'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-student-data',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './student-data.component.html',
  styleUrl: './student-data.component.scss'
})
export class StudentDataComponent {
  displayedColumns: string[] = ['position', 'name', 'lastName', 'subject'];
  dataSource = ELEMENT_DATA;
}
