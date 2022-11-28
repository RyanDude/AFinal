import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {

  constructor(private http:HttpClient) { }
  show:boolean = false;
  mentors:any[] = [];
  pageNum:number = 0;
  totalNum:number = 0;
  input:string = '';
  showmen:number = 0;
  ngOnInit(): void {
  }
  search(){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/student/search?pageNumber='+this.pageNum+'&size=10&name='+this.input;
    this.http.get<any>(url, {'headers':headers,observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{console.log(response.body.inner);
        this.mentors = response.body.inner.content;
        this.totalNum = response.body.inner.totalPages;
        this.showmen = this.pageNum+1;},
      error:(err)=>{}
    });
    this.show = true;
  }
  previous(){
    this.pageNum--
    this.search();
  }
  next(){
    this.pageNum++;
    this.search();
  }
  send(id:number){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/student/follow?mid='+id;
    this.http.post<any>(url,{},{'headers':headers, observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{alert('success!');},
      error:(e)=>{}
    });
  }

}
