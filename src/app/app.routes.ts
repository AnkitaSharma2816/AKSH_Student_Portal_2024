import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListingComponent } from './student-listing/student-listing.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'student-list',
        component: StudentListingComponent
    }
];
