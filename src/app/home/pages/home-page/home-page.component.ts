import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: ` <app-navigation></app-navigation>`,
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
