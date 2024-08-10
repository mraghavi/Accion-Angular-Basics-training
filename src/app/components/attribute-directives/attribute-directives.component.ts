import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-attribute-directives',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css'
})
export class AttributeDirectivesComponent {
constructor(private route : Router){

}
changeColor : string= "bg-rgb(15, 112, 186)";

greenBtn(){
  this.changeColor = "bg-success"
}

blueBtn(){
  this.changeColor = "bg-primary"
}
navigatetoStructural() {
  this.route.navigateByUrl("structural-directives")
}
backgroundColor: string = 'lightblue';
textColor: string = 'black';

applyStyles() {
  this.backgroundColor = 'yellow';
  this.textColor = 'red';
}

}
