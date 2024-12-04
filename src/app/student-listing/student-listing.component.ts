import { Component } from '@angular/core';
import { StudentDataComponent } from "../student-data/student-data.component";

@Component({
  selector: 'app-student-listing',
  standalone: true,
  imports: [StudentDataComponent],
  templateUrl: './student-listing.component.html',
  styleUrl: './student-listing.component.scss'
})
export class StudentListingComponent {

}
