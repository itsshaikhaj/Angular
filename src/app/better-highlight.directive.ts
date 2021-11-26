import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'green';
  @Input() highlightColor: string = '';
  
  @HostBinding('style.backgroundColor') bg : string = this.defaultColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
    this.bg = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
    this.bg = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    this.bg = this.defaultColor;

  }
}
