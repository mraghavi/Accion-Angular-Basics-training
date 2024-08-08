import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe,FormsModule,CommonModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
reactiveForm: FormGroup = new FormGroup({

  email : new FormControl("",[Validators.email,Validators.required]),
password: new FormControl("",[Validators.required,Validators.minLength(8)]),
address1 : new FormControl("",[Validators.required]),
address2: new FormControl(""),
city: new FormControl("",[Validators.required]),
state: new FormControl("",[Validators.required]), 
zip : new FormControl("",[Validators.required,Validators.pattern('^[0-9]+$'),Validators.maxLength(6),Validators.minLength(6)]),
checkbox: new FormControl("",[Validators.required])
});

formValue : any;

onClick(){
this.formValue = this.reactiveForm.value;
}

}
