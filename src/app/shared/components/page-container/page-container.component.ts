import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-container',
  template: ` <div class="page-container"><ng-content></ng-content></div> `,
  styleUrls: ['./page-container.component.scss'],
})
export class PageContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
