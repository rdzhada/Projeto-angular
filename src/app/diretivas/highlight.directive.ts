import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input('highlight') highlightColor: string = 'yellow';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}

