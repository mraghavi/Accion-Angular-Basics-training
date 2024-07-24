import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from '../../ReusableComponents/alert/alert.component';
import { MyButtonComponent } from '../../ReusableComponents/my-button/my-button.component';

@Component({
  selector: 'app-api-get',
  standalone: true,
  imports: [AlertComponent,MyButtonComponent],
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
