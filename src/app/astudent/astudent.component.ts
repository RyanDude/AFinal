import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-astudent',
  templateUrl: './astudent.component.html',
  styleUrls: ['./astudent.component.css']
})
export class AStudentComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.student_info();
  }
  ItemsArray:any[]=[];
  pageNum:number = 0;
  totalNum:number = 0;
  showt:number = 0;
  student_info(){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/admin/stu?pageNumber='+this.pageNum+'&size=10';
    this.http.get<any>(url, {'headers':headers,observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{console.log(response.body.inner);
        this.ItemsArray = response.body.inner.content;
        this.totalNum = response.body.inner.totalPages;
        this.showt = this.pageNum+1;},
      error:(err)=>{}
    });
  }
  previous(){
    this.pageNum--;
    this.student_info();
  }
  next(){
    this.pageNum++;
    this.student_info()
  }

}
