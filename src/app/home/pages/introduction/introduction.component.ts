import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INTRODUCTION_CARDS_TOKEN } from 'src/app/core/tokens/dashboard-cards.token';
import { DashboardCardListType } from 'src/app/core/types/dashboard-cards.type';
import { DashboardCard } from 'src/app/shared/models/dashboard-card.model';

@Component({
  selector: 'app-introduction',
  template: `
    <mat-toolbar color="accent">Introduction</mat-toolbar>
    <app-page-container>
      <app-title-card docLink="https://angular.io/docs">
        <card-title>About </card-title>
        <card-content>
          <p>
            <a
              href="https://github.com/seanadipose/example-angular"
              target="_blank"
              style="margin-bottom: 15px;"
              >Link to This Repo</a
            >
          </p>
          <p>
            The Angular framework is a very opinionated framework that is a good
            choice for projects that will need to live for a long time, that
            will have many developers working on them or for non-trivial form
            apps. Most of the core library choices are already made on package
            install – and many of the really good libraries extend the Angular
            Framework. Start by reading the core concepts:
            <a href="https://angular.io/start" target="_blank">Angular Home</a>
            under “Main Concepts”.
          </p>
          <p>
            Many of these concepts are fairly different than the other
            frameworks. For example: components and templates are treated as the
            “view” in the angular framework. There are additional helpers called
            “directives” which apply styles and features to the templates.
            Angular has a few different ways of displaying content built into
            the core library, and there’s more than one entry point for
            triggering the display of that content. Becoming good at Angular
            involves becoming good at TypeScript, following the standards, and
            effectively using the API. Using the API and Angular Features
            correctly by following the style guide are what make a successful
            project.
          </p>
        </card-content>
      </app-title-card>
      <app-dashboard
        [cards]="cards"
        (selected)="navigate($event)"
      ></app-dashboard>
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
  navigate(card: DashboardCard) {
    this.router.navigate(card.link);
  }

  ngOnInit(): void {}
}
