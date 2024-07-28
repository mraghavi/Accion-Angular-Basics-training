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
export class LayoutComponent {
  title = 'Basics';

  toggleSidebar(): void {
    const sidebar = document.querySelector("#sidebar") as HTMLElement;
    const container = document.querySelector(".my-container") as HTMLElement;
    if (sidebar && container) {
      sidebar.classList.toggle("active-nav");
      container.classList.toggle("active-cont");
    }
  }
}
