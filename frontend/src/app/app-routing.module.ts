import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRollNumberComponent } from './student-roll-number/student-roll-number.component';

const routes: Routes = [
  { path: '', redirectTo: 'Students', pathMatch: 'full' },
  {path: 'Students',component:StudentRollNumberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
