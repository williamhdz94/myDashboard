import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from "@shared/components/title/title.component";

@Component({
  selector: 'app-change-detection',
  imports: [TitleComponent, JsonPipe],
  templateUrl: './change-detection.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent {

  frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2012
  }

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React'
      this.frameworkAsSignal.update( value =>  {
        value.name = 'React'

        return { ...value }
      })
    }, 3000);
  }

}
