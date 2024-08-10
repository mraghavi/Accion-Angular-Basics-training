import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Logger } from '../../sevices/hero.service';



@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
 
}
