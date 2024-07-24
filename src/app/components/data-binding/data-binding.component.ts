import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasicService } from '../../sevices/basic.service';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from '../../ReusableComponents/my-button/my-button.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule,CommonModule,MyButtonComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  message = 'Hello, Angular!';
  isdisabled = false;
  myFunction() {
    alert('Success');
  }
  username = '';
  userInput = 'Check';

 city = '';

 constructor(private ts: BasicService){}
  colors = this.ts.color
  
 
}
