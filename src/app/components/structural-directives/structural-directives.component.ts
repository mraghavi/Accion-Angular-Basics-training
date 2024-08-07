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

  currentSection: string = 'introduction';
  isBoxVisible: boolean = true;
  isToggle: boolean = true;

  workers: string[] = ['worker 1', 'worker 2', 'worker 3', 'worker 4', 'worker 5'];

  showSection(section: string) {
    this.currentSection = section;
  }

  onBox1() {
    this.isBoxVisible = true;
  }

  offBox1() {
    this.isBoxVisible = false;
  }

  toggle() {
    this.isToggle = !this.isToggle;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
