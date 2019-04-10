import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appChnageColor]'
})
export class ChnageColorDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

   ngOnInit(): void {
       const div = this.el.nativeElement;

    }
}
