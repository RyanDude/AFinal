import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';
import { MentorProfileComponent } from './mentor-profile/mentor-profile.component';
import { MentorComponent } from './mentor/mentor.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { AStudentComponent } from './astudent/astudent.component';
import { AMentorComponent } from './amentor/amentor.component';
import { ASearchComponent } from './asearch/asearch.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { YourStudentsComponent } from './your-students/your-students.component';
import { MsearchComponent } from './msearch/msearch.component';
import { MfileComponent } from './mfile/mfile.component';
import { SfileComponent } from './sfile/sfile.component';
import { ChecklistPageComponent } from './checklist-page/checklist-page.component';
import { AboutComponent } from './about/about.component';
import { DescriptionComponent } from './description/description.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    ProfileComponent,
    MentorProfileComponent,
    MentorComponent,
    StudentComponent,
    AdminComponent,
    AStudentComponent,
    AMentorComponent,
    ASearchComponent,
    StudentSearchComponent,
    YourStudentsComponent,
    MsearchComponent,
    MfileComponent,
    SfileComponent,
    ChecklistPageComponent,
    AboutComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
