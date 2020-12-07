import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HighlightResult } from 'ngx-highlightjs';
import {
  INTRODUCTION_CARDS_TOKEN,
  SERVICES_CARDS_TOKEN,
} from 'src/app/core/tokens/dashboard-cards.token';
import { DashboardCardListType } from 'src/app/core/types/dashboard-cards.type';
import { ServicesCardsType } from 'src/app/core/types/services-cards.type';
import { DashboardCard } from 'src/app/shared/models/dashboard-card.model';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-services-introduction',
  template: `
    <mat-toolbar color="accent">Services in Angular</mat-toolbar>
    <app-page-container>
      <app-title-card>
        <card-title>{{ cards[0].title }}</card-title>
        <card-content
          ><p *ngFor="let line of cards[0].description">
            {{ line }}
          </p></card-content
        >
      </app-title-card>
      <app-title-card
        docLink="https://coryrylan.com/blog/angular-observable-data-services"
      >
        <card-title>{{ cards[1].title }}</card-title>
        <card-content
          ><p *ngFor="let line of cards[1].description">
            {{ line }}
          </p></card-content
        >
      </app-title-card>
      <app-title-card>
        <card-title>Simple Service Declaration</card-title>
        <card-content>
          <app-code-block [code]="code"></app-code-block>
        </card-content>
      </app-title-card>

      <app-dashboard
        [cards]="introCards"
        (selected)="navigate($event)"
      ></app-dashboard>
    </app-page-container>
  `,
  styleUrls: ['./services-introduction.component.scss'],
})
export class ServicesIntroductionComponent implements OnInit {
  constructor(
    @Inject(SERVICES_CARDS_TOKEN) public cards: ServicesCardsType,
    @Inject(INTRODUCTION_CARDS_TOKEN) public introCards: DashboardCardListType,
    private router: Router
  ) {}

  ngOnInit(): void {}
  navigate(card: DashboardCard) {
    this.router.navigate(card.link);
  }

  response: HighlightResult;

  code = `
  @Injectable({
    providedIn: 'root'
  })
  export class NameService {
  }
`;

  onHighlight(e) {
    console.log(e);
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}',
    };
  }
}
