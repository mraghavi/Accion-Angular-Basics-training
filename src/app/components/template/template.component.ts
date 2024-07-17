import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule,JsonPipe,CommonModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
templateObj: any ={
  email: "",
  password: "",
  address:"",
  adress2:"",
  city: "",
  state: "",
  zipcode: "",
  checkbox:""
  
}

formValue : any;
onClick(){
  debugger;
this.formValue = this.templateObj
}
resetValue(){
  this.templateObj = {
    email:"",
  password: "",
  address:"",
  adress2:"",
  city: "",
  state: "",
  zipcode: "",
  checkbox:""
}
}
}
