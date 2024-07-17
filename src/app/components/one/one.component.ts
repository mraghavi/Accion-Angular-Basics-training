import { Component, OnInit } from '@angular/core';
import { BasicService } from '../../sevices/basic.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent  implements OnInit{
constructor(private ts: BasicService){}
  colors : any;
  
  ngOnInit(): void {
   this.colors =  this.ts.getColors();
  }
  
}
