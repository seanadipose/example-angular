import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-container',
  template: `
    <div class="page-container">
      <div fxLayout="column" fxLayoutAlign="start start" fxLayoutGap="15px">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./page-container.component.scss'],
})
export class PageContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
