import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {

  isboxvisible: boolean = true
  istoggle: boolean = true
  isswitch: boolean = true
  onBox1(){
    this.isboxvisible = true;
  }
  offBox1(){
    this.isboxvisible = false;
  }
  toggle(){
    this.istoggle = !this.istoggle;
  }
  switch(){
this.isswitch = true;
  }
}
