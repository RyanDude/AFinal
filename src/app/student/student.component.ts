import {Component, OnInit, Sanitizer} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser'
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.ini();
  }
  content:any;
  pageNumber:number = 0;
  mid:number = -1;
  ini(){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/student/recommend?pageNumber=';
    this.http.get<any>(url+this.pageNumber+'&size=1',
      {'headers':headers,observe: 'response', withCredentials: true}).subscribe(
      {
        next:(response)=>{
          this.pageNumber++;
          let r = response.body.inner.content;
          for(let i = 0; i < r.length; ++i){
            this.mid = r[i].id;
            let t = "http://44.206.252.37:9999/student/follow?mid=" + r[i].id;
            let m = '<a href='+'"'+t+'" target="_blank"'+'>apply</a>';
            //let m = '<button >mid'+r[i].id+'</button>';
            let ret =
              '<div><br/><p>Mentor Name:'+r[i].name+'</p>' +
              '<p>Mentor Email:'+r[i].email+'</p>' +
              '<p>Mentor Title:'+r[i].title+'</p>' +
              m + '<br/><div>';
            this.content = ret;
          }
        },
        error:(err)=>{}
      }
    )
  }
  apply(){
    const headers = { 'content-type': 'application/json'};
    const url = 'http://44.206.252.37:9999/student/follow?mid='+this.mid;
    this.http.post<any>(url,{},{'headers':headers, observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{alert('success!');},
      error:(e)=>{}
    });
    this.ini();
  }


}
