import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class TitleComponent {

  // Nueva forma
  // title = input.required();

  // Forma antigua
  @Input({ required: true }) title: string = '';

}
