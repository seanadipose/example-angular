import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-home-component
    ><router-outlet></router-outlet
  ></app-home-component>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'example-angular';
}
