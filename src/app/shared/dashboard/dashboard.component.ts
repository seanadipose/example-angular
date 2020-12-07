import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DashboardCard } from '../models/dashboard-card.model';

@Component({
  selector: 'app-dashboard',
  template: `
    <!-- <div class="grid-container"> -->
    <!-- <mat-grid-list cols="2"> -->
    <!-- <mat-grid-tile *ngFor="let card of cards"> -->
    <mat-card class="dashboard-card" *ngFor="let card of cards">
      <mat-card-title>
        <h1
          class="dashboard-title"
          fxLayout="column"
          fxLayoutAlign="space-around center"
        >
          {{ card.title }}
        </h1>
        <!-- <button
                  mat-icon-button
                  class="more-button"
                  [matMenuTriggerFor]="menu"
                  aria-label="Toggle menu"
                >
                  <mat-icon>more_vert</mat-icon>
                </button>
                <mat-menu #menu="matMenu" xPosition="before">
                  <button mat-menu-item>Expand</button>
                  <button mat-menu-item>Remove</button>
                </mat-menu> -->
      </mat-card-title>
      <mat-card-content class="dashboard-card-content">
        <div>{{ card.description }}</div>
      </mat-card-content>
      <mat-card-footer>
        <button mat-button *ngIf="card.linkText">
          {{ card.linkText }}
          <mat-icon>chevron_right</mat-icon>
        </button>
      </mat-card-footer>
    </mat-card>
    <!-- </mat-grid-tile> -->
    <!-- </mat-grid-list> -->
    <!-- </div> -->
  `,
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */

  @Input() cards: DashboardCard[] = [];

  constructor(private breakpointObserver: BreakpointObserver) {}
}
