import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';
import { MentorProfileComponent } from './mentor-profile/mentor-profile.component';
import { MentorComponent } from './mentor/mentor.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { AMentorComponent } from './amentor/amentor.component';
import { AStudentComponent } from './astudent/astudent.component';
import { ASearchComponent } from './asearch/asearch.component';
import {StudentSearchComponent} from './student-search/student-search.component';
import {YourStudentsComponent} from './your-students/your-students.component';
import {MsearchComponent} from './msearch/msearch.component';
import {MfileComponent} from './mfile/mfile.component';
import {SfileComponent} from './sfile/sfile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'mentor_profile', component: MentorProfileComponent },
  { path: 'mentor', component: MentorComponent },
  { path: 'student', component: StudentComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'amentor', component: AMentorComponent },
  { path: 'astudent', component: AStudentComponent },
  { path: 'asearch', component: ASearchComponent },
  { path: 'ssearch', component: StudentSearchComponent },
  { path: 'yourstudents', component: YourStudentsComponent },
  { path: 'msearch', component: MsearchComponent },
  { path: 'mfile', component: MfileComponent },
  { path: 'sfile', component: SfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

