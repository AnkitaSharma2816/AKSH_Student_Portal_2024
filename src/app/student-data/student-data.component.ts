import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { StudentMockData } from '../mock_data/student_data';
import { StudentDataModel } from '../interfaces/student_data.model';


const ELEMENT_DATA: StudentDataModel[] = StudentMockData;


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
