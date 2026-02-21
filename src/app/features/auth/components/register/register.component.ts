import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@shared/components';

/**
 * Componente de registro
 */
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ButtonComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  isLoading = false;

  onSubmit(): void {
    if (this.userData.password !== this.userData.confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    this.isLoading = true;
    
    // TODO: Implementar lógica de registro
    console.log('Register attempt:', this.userData);
    
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  passwordsMatch(): boolean {
    return this.userData.password === this.userData.confirmPassword;
  }
}
