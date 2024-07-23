import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api-get',
  standalone: true,
  imports: [],
  templateUrl: './api-get.component.html',
  styleUrl: './api-get.component.css'
})
export class ApiGetComponent {

  id: any[]= [];
  constructor(private http: HttpClient){
   
  }

  getAllAlbums(){
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/albums").subscribe((res:any)=>{
      debugger;
      this.id = res;
    })
  }

}
