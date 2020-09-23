import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgStyle]'
})
export class BgStyleDirective {

  constructor(element: ElementRef) { 
    element.nativeElement.style.backgroundColor = '#E5E5E5';
  }

}
