import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INTRODUCTION_CARDS_TOKEN } from 'src/app/core/tokens/dashboard-cards.token';
import { DashboardCardListType } from 'src/app/core/types/dashboard-cards.type';
import { DashboardCard } from 'src/app/shared/models/dashboard-card.model';

@Component({
  selector: 'app-introduction',
  template: `
    <app-page-container
      ><div fxLayout="column" fxLayoutAlign="space-around start">
        <h1>Introduction to Sean's Angular Examples</h1>
        <app-dashboard
          [cards]="cards"
          (selected)="navigate($event)"
        ></app-dashboard>
      </div>
    </app-page-container>
  `,
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  cards: DashboardCard[];
  constructor(
    @Inject(INTRODUCTION_CARDS_TOKEN) cards: DashboardCardListType,
    private router: Router
  ) {
    this.cards = [...cards];
  }

  ngOnInit(): void {}
  navigate(card: DashboardCard) {
    console.log(
      '🚀 ----------------------------------------------------------------------------------------------'
    );
    console.log(
      '🚀 ~ file: introduction.component.ts ~ line 33 ~ IntroductionComponent ~ navigate ~ card',
      card
    );
    console.log(
      '🚀 ----------------------------------------------------------------------------------------------'
    );
    this.router.navigate(card.link);
  }
}
