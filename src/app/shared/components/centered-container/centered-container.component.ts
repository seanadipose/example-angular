import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centered-container',
  template: `
    <div
      fxLayout="column"
      fxLayoutAlign="space-around center"
      class="main-content"
    >
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./centered-container.component.scss'],
})
export class CenteredContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
