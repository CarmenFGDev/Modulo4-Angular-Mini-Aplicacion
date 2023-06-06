import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRotateImage]',
})
export class RotateImageDirective {
  @Input() step: number = 10;

  constructor(private el: ElementRef) {}

  @HostListener('mousedown')
  onMouseEnter() {
   const currentRotation = this.el.nativeElement.style.transform;
    const currentDegrees = parseInt(
      currentRotation
        ? currentRotation.replace('rotate(', '').replace('deg)', '')
        : '0',
      10
    );
    const newRotation = `rotate(${currentDegrees + this.step}deg)`;
    this.el.nativeElement.style.transform = newRotation;
    this.el.nativeElement.transition = 'all 4s ease';
  }
}
