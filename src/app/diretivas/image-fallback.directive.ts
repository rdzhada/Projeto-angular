import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImageFallback]'
})
export class ImageFallbackDirective {
  @Input() appImageFallback: string = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fimage-placeholder_8136031&psig=AOvVaw3rVCjIpcWka5j62Zfbjc1a&ust=1732758041922000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJC0o52x-4kDFQAAAAAdAAAAABAE'; 

  constructor(private el: ElementRef) {}

  @HostListener('error') onError() {
    const element: HTMLImageElement = this.el.nativeElement;
    element.src = this.appImageFallback; 
  }
}
