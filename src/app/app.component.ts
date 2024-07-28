import { Component } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { PipesComponent } from './components/pipes/pipes.component';
import { TemplateComponent } from './components/template/template.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ApiGetComponent } from './components/api-get/api-get.component';
import { AlertComponent } from './ReusableComponents/alert/alert.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageModule } from 'primeng/message';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule,MessageModule,RippleModule,AlertComponent,LoginComponent,ApiGetComponent,HomeComponent,FormsModule, RouterOutlet , RouterLink,TemplateComponent,ReactiveComponent,PipesComponent,NotfoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'Basics';
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    
  }
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
