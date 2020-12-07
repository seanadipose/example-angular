import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FORM_INTRODUCTION_CARDS_TOKEN,
  INTRODUCTION_CARDS_TOKEN,
} from 'src/app/core/tokens/dashboard-cards.token';
import { DashboardCardListType } from 'src/app/core/types/dashboard-cards.type';
import { DashboardCard } from 'src/app/shared/models/dashboard-card.model';

@Component({
  selector: 'app-forms-introduction',
  template: ` <mat-toolbar color="accent">Introduction</mat-toolbar>

    <app-page-container>
      <app-title-card docLink="https://angular.io/guide/reactive-forms">
        <card-title
          >Introduction to concepts in angular reactive forms.</card-title
        >
        <card-content>
          <p>
            Angular reactive forms are incredibly powerful but have a number of
            quirks and behaviors to pay attention to.
          </p>
        </card-content>
      </app-title-card>

      <app-dashboard
        [cards]="cards"
        (selected)="navigate($event)"
      ></app-dashboard
    ></app-page-container>`,
  styleUrls: ['./forms-introduction.component.scss'],
})
export class FormsIntroductionComponent {
  cards: DashboardCard[];
  constructor(
    @Inject(FORM_INTRODUCTION_CARDS_TOKEN) cards: DashboardCardListType,
    private router: Router
  ) {
    this.cards = [...cards];
  }
  navigate(card: DashboardCard) {
    this.router.navigate(card.link);
  }
}
