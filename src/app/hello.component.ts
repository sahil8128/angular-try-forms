import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `Jason Roy`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
