import {
  Directive,
  ElementRef,
  inject,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[primary-button]',
})
export class ButtonDirective implements OnInit {
  private elementRef: ElementRef = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);

  constructor() {}

  ngOnInit(): void {
    this.class_elements.forEach((element) => {
      this.renderer.addClass(this.elementRef.nativeElement, element);
    });
  }

  class_elements = [
    'relative',
    '-top-1',
    '-left-1',
    'bg-button-background-primary-light',
    'dark:bg-button-background-primary-dark',
    'py-2.5',
    'px-5',
    'font-medium',
    'uppercase',
    'text-white',
    'transition-all',
    'before:absolute',
    'before:top-1',
    'before:left-1',
    'before:-z-[1]',
    'before:h-full',
    'before:w-full',
    'before:border-2',
    'before:border-gray-700',
    'before:transition-all',
    "before:content-['']",
    'hover:top-0',
    'hover:left-0',
    'before:hover:top-0',
    'before:hover:left-0',
  ];
}
