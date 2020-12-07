import { Component, Inject, OnInit } from '@angular/core';
import { RESOURCES_CARDS_TOKEN } from 'src/app/core/tokens/dashboard-cards.token';
import { ResourceCardsType } from 'src/app/core/types/resource-cards.type';

@Component({
  selector: 'app-resources',
  template: `
    <mat-toolbar color="accent">
      <span>Useful Resources</span>
    </mat-toolbar>
    <app-page-container>
      <div
        fxLayout="column"
        fxLayoutAlign="space-around center"
        class="main-content"
      >
        <mat-card class="container-card">
          <mat-card-header
            ><mat-card-title>Reference Links</mat-card-title></mat-card-header
          >
          <mat-card-content>
            <app-resources-title-card title="Links"></app-resources-title-card>
            <app-dashboard-list [cards]="cards.useful"></app-dashboard-list>
          </mat-card-content>
        </mat-card>
        <mat-card class="container-card">
          <app-resources-title-card
            title="Libraries"
          ></app-resources-title-card>

          <mat-card-content>
            <app-dashboard-list [cards]="cards.libraries"></app-dashboard-list>
          </mat-card-content>
        </mat-card>
        <mat-card class="container-card">
          <app-resources-title-card
            title="Tutorials"
          ></app-resources-title-card>

          <mat-card-content>
            <app-dashboard-list [cards]="cards.tutorials"></app-dashboard-list>
          </mat-card-content>
        </mat-card>
      </div>
    </app-page-container>
  `,
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  constructor(@Inject(RESOURCES_CARDS_TOKEN) public cards: ResourceCardsType) {}

  ngOnInit(): void {}
}
