import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators ,FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Fixed typo here from styleUrl to styleUrls
})
export class ContactComponent {
  reactiveForm: FormGroup = new FormGroup({

    email : new FormControl("",[Validators.email,Validators.required]),
 
  name : new FormControl("",[Validators.required]),
  
  city: new FormControl("",[Validators.required]),
  message: new FormControl("",[Validators.required]), 
  phoneNumber : new FormControl("",[Validators.required,Validators.pattern('^[0-9]+$'),Validators.maxLength(10),Validators.minLength(10)]),
  subject: new FormControl("",[Validators.required])
  });
  
  formValue : any;
  
  onSubmit(){
  this.formValue = this.reactiveForm.value;
  }
  
    } 
  

