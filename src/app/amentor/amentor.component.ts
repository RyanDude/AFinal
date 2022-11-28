import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-amentor',
  templateUrl: './amentor.component.html',
  styleUrls: ['./amentor.component.css']
})
export class AMentorComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.mentor_info();
  }
  ItemsArray:any[]=[];
  pageNum:number = 0;
  totalNum:number = 0;
  showt:number = 0;
  mentor_info(){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/admin/men?pageNumber='+this.pageNum+'&size=10';
    this.http.get<any>(url, {'headers':headers,observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{
        console.log(response.body.inner);
        this.ItemsArray = response.body.inner.content;
        this.totalNum = response.body.inner.totalPages;
        this.showt = this.pageNum+1;
        },
      error:(err)=>{}
    });
  }
  previous(){
    this.pageNum--;
    this.mentor_info();
  }
  next(){
    this.pageNum++;
    this.mentor_info();
  }
}
