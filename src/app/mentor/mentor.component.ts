import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }
  ItemsArray: any[] = [];
  ngOnInit(): void {
    this.ini();
  }

  ini(){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/mentor/waiting/';
    this.http.get<any>(url, {'headers':headers,observe: 'response', withCredentials: true}).subscribe(
      {
        next:(response)=>{
          let r = response.body.inner;
          console.log(r);
          this.ItemsArray = r;
          },
        error:(err)=>{}
      }
    );
  }
  accept(i:number){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/mentor/accept?sid='+i;
    this.http.post<any>(url, {}, {'headers':headers,observe: 'response', withCredentials: true}).subscribe(
      {
        next:(response)=>{alert("accept successfully");},
        error:(err)=>{}
      }
    );
  }
  refuse(i:number){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/mentor/refuse?sid='+i;
    this.http.post<any>(url, {}, {'headers':headers,observe: 'response', withCredentials: true}).subscribe(
      {
        next:(response)=>{alert("refuse successfully");},
        error:(err)=>{}
      }
    );
  }

}
