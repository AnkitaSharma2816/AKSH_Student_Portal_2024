import { Component } from '@angular/core';
import { StudentDataComponent } from "../student-data/student-data.component";
import { StudentDetailsComponent } from "../student-details/student-details.component";
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-student-listing',
  standalone: true,
  imports: [StudentDataComponent, StudentDetailsComponent,MatGridListModule],
  templateUrl: './student-listing.component.html',
  styleUrl: './student-listing.component.scss'
})
export class StudentListingComponent {

}
