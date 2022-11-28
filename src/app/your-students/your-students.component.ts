import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-your-students',
  templateUrl: './your-students.component.html',
  styleUrls: ['./your-students.component.css']
})
export class YourStudentsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  students:any[] = [];
  file:any;
  ngOnInit(): void {
    this.get();
  }
  show:number = 0;
  get(){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/mentor/self-students';
    this.http.get<any>(url, {'headers':headers,observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{console.log(response.body.inner);
        this.students = response.body.inner;
        },
      error:(err)=>{}
    });
  }
  previous(){}
  next(){}
  onChange(event:any){
    this.file = event.target.files[0];
  }
  upload(sid:string){

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("file", this.file, this.file.name);
    formData.append("sid",sid);

    // Make http post request over api
    // with formData as req
    this.http.post('http://44.206.252.37:9999/mentor/send_file', formData, {observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{console.log(response);},
      error:(err)=>{}
    });

  }
}
