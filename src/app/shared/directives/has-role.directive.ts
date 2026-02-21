import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Directiva estructural para mostrar/ocultar elementos basado en roles
 * 
 * @example
 * <div *appHasRole="'admin'">
 *   Solo visible para administradores
 * </div>
 */
@Directive({
  selector: '[appHasRole]',
  standalone: true
})
export class HasRoleDirective {
  private currentRole: string = 'user'; // TODO: Obtener del servicio de autenticación

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appHasRole(role: string) {
    if (this.checkRole(role)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  private checkRole(role: string): boolean {
    // TODO: Implementar lógica real de verificación de roles
    return this.currentRole === role;
  }
}
