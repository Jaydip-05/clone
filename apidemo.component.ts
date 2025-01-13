import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient, HttpClientXsrfModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-apidemo',
  imports: [HttpClientXsrfModule, CommonModule],
  templateUrl: './apidemo.component.html',
  styleUrl: './apidemo.component.css'
})
export class ApidemoComponent {
userList :any []=[];

  constructor(private http : HttpClient) {

  }
  getalluser (){
    
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      debugger
      this.userList =res;
    })
  }

facts:any []=[];
  getfact(){
this.http.get("http://localhost:3000/Students").subscribe((res:any)=>{
  debugger;
  this.facts = res;
 
})
  }
}
