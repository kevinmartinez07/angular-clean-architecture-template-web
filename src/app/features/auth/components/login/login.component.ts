import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@shared/components';

/**
 * Componente de login
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  isLoading = false;

  onSubmit(): void {
    this.isLoading = true;
    
    // TODO: Implementar lógica de login
    console.log('Login attempt:', this.credentials);
    
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  onForgotPassword(): void {
    console.log('Forgot password clicked');
    // TODO: Navegar a recuperación de contraseña
  }
}
