import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 * Directiva para resaltar elementos al pasar el mouse
 * 
 * @example
 * <div appHighlight [highlightColor]="'yellow'">
 *   Pasa el mouse sobre mí
 * </div>
 */
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() highlightColor: string = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
