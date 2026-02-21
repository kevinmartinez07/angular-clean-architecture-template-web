import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Componente de spinner/loader para indicar carga
 * 
 * @example
 * <app-loader [isLoading]="isLoadingData" [message]="'Cargando datos...'"></app-loader>
 */
@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader-container" *ngIf="isLoading">
      <div class="loader-overlay" *ngIf="overlay"></div>
      <div class="loader-content">
        <div class="spinner"></div>
        <p *ngIf="message" class="loader-message">{{ message }}</p>
      </div>
    </div>
  `,
  styles: [`
    .loader-container {
      position: relative;
    }

    .loader-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9998;
    }

    .loader-content {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 9999;
      text-align: center;
    }

    .spinner {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #007bff;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
      margin: 0 auto;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .loader-message {
      margin-top: 1rem;
      color: white;
      font-size: 1rem;
    }
  `]
})
export class LoaderComponent {
  @Input() isLoading: boolean = false;
  @Input() message?: string;
  @Input() overlay: boolean = true;
}
