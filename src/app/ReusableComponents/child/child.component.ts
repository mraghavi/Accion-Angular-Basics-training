import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() notify = new EventEmitter<string>(); 

  notifyParent() {
    this.notify.emit('We have successfully implemented @Output'); 
  }
}
