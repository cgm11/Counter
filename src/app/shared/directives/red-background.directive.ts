import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedBackground]'
})
export class RedBackgroundDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = '#db2828';
    element.nativeElement.style.color = 'white';
    element.nativeElement.style.height = '100px'; 
   }

}
