import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources-title-card',
  template: `
    <app-title-card>
      <card-title>{{ title }}</card-title>
      <card-subtitle>{{ description }}</card-subtitle>
    </app-title-card>
  `,
  styleUrls: ['./resources-title-card.component.scss'],
})
export class ResourcesTitleCardComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;

  constructor() {}

  ngOnInit(): void {}
}
