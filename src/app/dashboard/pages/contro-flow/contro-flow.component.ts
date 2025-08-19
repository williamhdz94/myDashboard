import { Component, signal } from '@angular/core';
import { TitleComponent } from "@shared/components/title/title.component";

type grade = 'A' | 'B' | 'C';

@Component({
  selector: 'app-contro-flow',
  imports: [TitleComponent],
  templateUrl: './contro-flow.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class ControFlowComponent {

  public showContent = signal(false);
  grade = signal<grade>('A');
  frameworks = signal<string[]>(['Angular', 'VUE JS', 'SVELTE', 'QUICK'])

  toggleContent() {
    this.showContent.update( value => !value )
  }

}
