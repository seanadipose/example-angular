import { Component, Inject, OnInit } from '@angular/core';
import { SERVICES_CARDS_TOKEN } from 'src/app/core/tokens/dashboard-cards.token';
import { ServicesCardsType } from 'src/app/core/types/services-cards.type';

@Component({
  selector: 'app-services-best-practices',
  template: `
    <mat-toolbar color="accent">Services in Angular</mat-toolbar>

    <app-page-container>
      <app-title-card>
        <card-title>{{ cards[2].title }}</card-title>
        <card-content
          ><p *ngFor="let line of cards[2].description">
            {{ line }}
          </p></card-content
        >
      </app-title-card>
    </app-page-container>
  `,
  styleUrls: ['./best-practices.component.scss'],
})
export class ServicesBestPracticesComponent implements OnInit {
  constructor(@Inject(SERVICES_CARDS_TOKEN) public cards: ServicesCardsType) {}

  ngOnInit(): void {}
}
