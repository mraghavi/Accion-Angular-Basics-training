import { Component } from '@angular/core';
import { ChildComponent } from '../../ReusableComponents/child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  message: string = ''; 

  handleNotification(message: string) {
    this.message = message; 
  }
}
