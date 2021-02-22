import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHilights]'
})

export class HilightsDirective {
  constructor(public element: ElementRef) {
    console.log(this.element);
  }
  @Input() color: string;

  @HostListener('mouseenter') hover(): void {
    this.setColor(this.color);
  }

  @HostListener('mouseleave') leave(): void {
    this.setColor(null);
  }

  private setColor(color: string): void {
    this.element.nativeElement.style.background = color;
  }

}
