import { Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [
    RouterModule
  ],
  templateUrl: './side-menu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SideMenuComponent {

  public menuItems = routes.map( route => route.children ?? [] ).flat().filter( route => route.path ).filter( route => !route.path?.includes(':') );

}
