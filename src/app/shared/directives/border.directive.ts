import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective {

  @Input('appBorder') borderColor: string;

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click') onClick() {

    this.setBorder(this.borderColor);
  }

  @HostListener('mouseleave') onMouseLeave() {

    this.setBorder(null);
  }

  private setBorder(color: string) {

    this.render.setStyle(this.el.nativeElement, 'border-color', color);
  }
}
