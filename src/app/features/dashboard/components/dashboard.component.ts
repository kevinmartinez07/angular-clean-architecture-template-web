import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '@shared/components';

/**
 * Componente del Dashboard principal
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <div class="dashboard-container">
      <h1>Dashboard</h1>
      
      <div class="dashboard-grid">
        <app-card [title]="'Usuarios'">
          <p>Total de usuarios: <strong>1,234</strong></p>
        </app-card>

        <app-card [title]="'Ventas'">
          <p>Ventas del mes: <strong>$45,678</strong></p>
        </app-card>

        <app-card [title]="'Productos'">
          <p>Productos activos: <strong>567</strong></p>
        </app-card>

        <app-card [title]="'Pedidos'">
          <p>Pedidos pendientes: <strong>89</strong></p>
        </app-card>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 2rem;

      h1 {
        margin-bottom: 2rem;
        color: #333;
      }
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    p {
      margin: 0;
      color: #666;

      strong {
        color: #333;
        font-size: 1.5rem;
        display: block;
        margin-top: 0.5rem;
      }
    }
  `]
})
export class DashboardComponent {}
