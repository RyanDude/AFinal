import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.confirm_info();
    this.number_of_student();
    this.number_of_mentor();
  }
  ItemsArray: any[] = [];
  snum:any;
  mnum:any;
  confirm_info(){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/admin/confirm';
    this.http.get<any>(url, {'headers':headers,observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{
        console.log(response.body.inner);
        this.ItemsArray = response.body.inner;
        },
      error:(err)=>{}
    });
  }
  number_of_student(){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/admin/nstudent';
    this.http.get(url, {'headers':headers,observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{console.log(response.body);
          this.snum=response.body;
        },
      error:(err)=>{}
    });
  }
  number_of_mentor(){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/admin/nmentor';
    this.http.get(url, {'headers':headers,observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{console.log(response.body);this.mnum=response.body;},
      error:(err)=>{}
    });
  }

  agree(sid:number, mid:number){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/admin/agree?sid='+sid+'&mid='+mid;
    this.http.post<any>(url, {},{'headers':headers,observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{console.log(response.body)},
      error:(err)=>{}
    });
  }
  refuse(sid:number, mid:number){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/admin/refuse?sid='+sid+'&mid='+mid;
    this.http.post<any>(url, {},{'headers':headers,observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{console.log(response.body)},
      error:(err)=>{}
    });
  }

}
