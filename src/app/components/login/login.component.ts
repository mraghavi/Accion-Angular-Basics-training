import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastModule, ButtonModule, RippleModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userObj: any = {
    userName: '',
    password: ''
  };
  
  router = inject(Router);
  
  constructor(private messageService: MessageService) {}

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Success' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Wrong Credentials' });
  }

  onLogin() {
    if (this.userObj.userName === "admin" && this.userObj.password === '12345') {
      this.showSuccess();
      localStorage.setItem('loginUser',this.userObj.userName );
      setTimeout(() => {
        this.router.navigateByUrl('home');
      }, 1000);
    } else {
      this.showError();
    }
  }

  togglePassword() {
    const passwordField = document.getElementById('password') as HTMLInputElement;
    const toggleBtn = document.getElementById('toggleBtn') as HTMLButtonElement;

    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      toggleBtn.innerText = 'Hide';
    } else {
      passwordField.type = 'password';
      toggleBtn.innerText = 'Show';
    }
  }
}
