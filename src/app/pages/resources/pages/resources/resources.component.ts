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
          <mat-toolbar>Reference Links</mat-toolbar>

          <mat-card-content>
            <app-dashboard-list [cards]="cards.useful"></app-dashboard-list>
          </mat-card-content>
        </mat-card>
        <mat-card class="container-card">
          <mat-toolbar>Libraries</mat-toolbar>

          <mat-card-content>
            <app-dashboard-list [cards]="cards.libraries"></app-dashboard-list>
          </mat-card-content>
        </mat-card>
        <mat-card class="container-card">
          <mat-toolbar>Tutorials</mat-toolbar>

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
