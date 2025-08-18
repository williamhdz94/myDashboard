import { Component } from '@angular/core';

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
export class TitleComponent { }
