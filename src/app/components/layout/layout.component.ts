import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent  {
  title = 'Basics';
  btnOpen!: HTMLElement;
  btnClose!: HTMLElement;
  fullNavItem!: HTMLElement;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.btnOpen = document.querySelector('.btn-open') as HTMLElement;
    this.btnClose = document.querySelector('.btn-close') as HTMLElement;
    this.fullNavItem = document.querySelector('.full-nav-item') as HTMLElement;

    this.btnOpen.addEventListener('click', this.openNav.bind(this));
    this.btnClose.addEventListener('click', this.closeNav.bind(this));
  }

  openNav(): void {
    this.fullNavItem.classList.add('show-full-nav-item');
    document.querySelector('.wrapper-header')?.classList.add('swipe-wrapper-header');
    this.btnClose.style.display = 'block';
    this.btnOpen.style.display = 'none';
  }

  closeNav(): void {
    this.fullNavItem.classList.remove('show-full-nav-item');
    document.querySelector('.wrapper-header')?.classList.remove('swipe-wrapper-header');
    this.btnClose.style.display = 'none';
    this.btnOpen.style.display = 'block';
  }
  
}
