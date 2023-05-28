import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRotateImage]',
})
export class RotateImageDirective {
  @Input() rotate: number = 180;
  @Input() step: number = 10;

  constructor(private el: ElementRef) {}

  @HostListener('mousedown')
  onMouseEnter() {
    const arg = 'rotate(' + this.rotate.toString() + 'deg)';
    this.el.nativeElement.style.transform = arg;
    this.el.nativeElement.transition = 'all 4s ease';
  }
}
