import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appMouseoverCongressCard]'
})
export class MouseoverCongressCardDirective implements OnInit {




  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-transform', 'scale(1)');
    this.renderer.setStyle(this.elementRef.nativeElement, '-ms-transform', 'scale(1)');
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1)');
  }

  @HostListener('mouseenter') mouseover(EventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-transform', 'scale(1.05)');
    this.renderer.setStyle(this.elementRef.nativeElement, '-ms-transform', 'scale(1.05)');
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1.05)');
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseleave') mouseleave(EventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-transform', 'scale(1)');
    this.renderer.setStyle(this.elementRef.nativeElement, '-ms-transform', 'scale(1)');
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1)');
  }






}
