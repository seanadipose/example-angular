import { Component, Inject, OnInit } from '@angular/core';
import { SERVICES_CARDS_TOKEN } from 'src/app/core/tokens/dashboard-cards.token';
import { ServicesCardsType } from 'src/app/core/types/services-cards.type';

@Component({
  selector: 'app-dependency-injection',
  template: `
    <mat-toolbar color="accent">Services in Angular</mat-toolbar>

    <app-page-container>
      <app-title-card>
        <card-title>{{ cards[3].title }}</card-title>
        <card-content
          ><p *ngFor="let line of cards[3].description">
            {{ line }}
          </p></card-content
        >
      </app-title-card>
    </app-page-container>
  `,
  styleUrls: ['./dependency-injection.component.scss'],
})
export class DependencyInjectionComponent implements OnInit {
  constructor(@Inject(SERVICES_CARDS_TOKEN) public cards: ServicesCardsType) {}

  ngOnInit(): void {}
}
