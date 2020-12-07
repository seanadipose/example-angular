import { Component, EventEmitter, Input, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DashboardCard } from '../../models/dashboard-card.model';

@Component({
  selector: 'app-dashboard',
  template: `
    <div fxLayout="row" fxLayoutAlign="start start" fxLayoutGap="15px">
      <mat-card class="dashboard-card" *ngFor="let card of cards">
        <mat-card-title>
          <h1
            class="dashboard-title"
            fxLayout="column"
            fxLayoutAlign="space-around center"
          >
            {{ card.title }}
          </h1>
        </mat-card-title>
        <mat-card-content class="dashboard-card-content">
          <div>{{ card.description }}</div>
        </mat-card-content>
        <mat-card-footer style="background-color">
          <button
            mat-button
            *ngIf="card.linkText"
            (click)="selected.emit(card)"
          >
            {{ card.linkText }}
            <mat-icon>chevron_right</mat-icon>
          </button>
        </mat-card-footer>
      </mat-card>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  @Output() selected = new EventEmitter<DashboardCard>();

  @Input() cards: DashboardCard[] = [];

  constructor() {}
}
