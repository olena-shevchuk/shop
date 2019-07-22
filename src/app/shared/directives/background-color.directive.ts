import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  @HostBinding('style.background-color')
  attrBackgroundColor: string;

  @HostListener('mouseenter', ['$event'])
  enter(event: Event) {

    this.attrBackgroundColor = 'rosybrown';
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event) {

    this.attrBackgroundColor = null;
  }
}
