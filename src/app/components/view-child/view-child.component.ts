import { Component, ViewChild } from '@angular/core';
import { AlertComponent } from '../../ReusableComponents/alert/alert.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
@ViewChild(AlertComponent) alertComp? : AlertComponent;

ngAfterViewInit(): void {
  debugger;
  const alertType = this.alertComp?.message;
  this.alertComp?.save()
}

}
