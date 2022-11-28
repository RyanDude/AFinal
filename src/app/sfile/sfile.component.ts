import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-sfile',
  templateUrl: './sfile.component.html',
  styleUrls: ['./sfile.component.css']
})
export class SfileComponent implements OnInit {

  constructor(private http:HttpClient) { }
  items:any[] = [];
  ngOnInit(): void {
    this.get();
  }
  get(){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/student/shared_file';
    this.http.get<any>(url, {'headers':headers,observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{console.log(response.body.inner);
        this.items = response.body.inner;
        console.log(this.items);
      },
      error:(err)=>{}
    });
  }

}
