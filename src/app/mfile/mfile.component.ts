import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-mfile',
  templateUrl: './mfile.component.html',
  styleUrls: ['./mfile.component.css']
})
export class MfileComponent implements OnInit {

  constructor(private http:HttpClient) { }
  show:boolean=false;
  items:any[] = [];
  file:any;
  students:any[]=[];
  selected:any;
  index:number = 0;
  ngOnInit(): void {
    this.get_file();
    this.ini();
  }
  send(file_name:string){
    const headers = { 'content-type': 'application/json'};
    console.log(this.selected);
    let start = 0;
    let end = 0;
    const url = 'http://44.206.252.37:9999/mentor/send_file?sid='+this.selected+'&file_name='+file_name;
    this.http.post<any>(url, {},{'headers':headers,observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{
        console.log(response.body.inner);
      },
      error:(err)=>{}
    });
  }
  onChange(event:any){
    this.file = event.target.files[0];
  }
  ini(){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/mentor/self-students';
    this.http.get<any>(url, {'headers':headers,observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{
        console.log(response.body.inner);
        this.students = response.body.inner;
        for(let i = 0; i < this.students.length; ++i){
          this.students[i].name += "[" + this.students[i].aid + "]";
        }
      },
      error:(err)=>{}
    });
  }
  upload(){

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("file", this.file, this.file.name);

    // Make http post request over api
    // with formData as req
    this.http.post('http://44.206.252.37:9999/mentor/upload', formData, {observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{console.log(response);this.get_file();},
      error:(err)=>{}
    });
  }
  get_file(){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/mentor/self_file';
    this.http.get<any>(url, {'headers':headers,observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{
        console.log(response.body.inner);
        this.items = response.body.inner;
        },
      error:(err)=>{}
    });
    this.show = true;
  }

}
