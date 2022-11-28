import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-asearch',
  templateUrl: './asearch.component.html',
  styleUrls: ['./asearch.component.css']
})
export class ASearchComponent implements OnInit {

  constructor(private http:HttpClient) { }
  input:string = '';
  shide:boolean = false;
  mhide:boolean = false;

  students:any[]=[];
  mentors:any[]=[];
  stotalNum:number=0;
  mtotalNum:number=0;
  showst:number=0;
  showmen:number=0;
  options:string[] = ['mentor', 'students'];
  option:string = '';
  ngOnInit(): void {
  }
  men_pageNum:number=0;
  stu_pageNum:number=0;
  searchMentor(){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/admin/searchMen?pageNumber='+this.men_pageNum+'&size=10&mname='+this.input;
    this.http.get<any>(url, {'headers':headers,observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{console.log(response.body.inner);
        this.mentors = response.body.inner.content;
        this.mtotalNum = response.body.inner.totalPages;
        this.showmen = this.men_pageNum+1;},
      error:(err)=>{}
    });
  }
  searchStudent(){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/admin/searchStu?pageNumber='+this.stu_pageNum+'&size=10'+'&size=10&sname='+this.input;
    this.http.get<any>(url, {'headers':headers,observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{console.log(response.body.inner);
        this.students = response.body.inner.content;
        this.stotalNum = response.body.inner.totalPages;
        this.showst = this.stu_pageNum+1;},
      error:(err)=>{}
    });
  }
  snext(){
    this.stu_pageNum++;
    this.searchStudent();
  }
  sprevious(){
    this.stu_pageNum--;
    this.searchStudent();
  }
  mnext(){
    this.men_pageNum++;
    this.searchMentor();
  }
  mprevious(){
    this.men_pageNum--;
    this.searchMentor();
  }
  search(){
    if(this.option == 'mentor'){
      this.searchMentor();
      this.mhide = true;
      this.shide = false;
    }else if(this.option == 'students'){
      this.searchStudent();
      this.mhide = false;
      this.shide = true;
    }
  }
}
