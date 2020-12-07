import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-dashboard-list',
  template: `
    <mat-list>
      <mat-list-item *ngFor="let card of cards">
        <a matLine [href]="card.link" class="link-text">{{ card.title }}</a>
        <p matLine>
          {{ card.description }}
        </p>
        <a mat-icon-button [href]="card.link" target="_blank">
          <mat-icon>chevron_right</mat-icon>
        </a>
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./dashboard-list.component.scss'],
})
export class DashboardListComponent
  extends DashboardComponent
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
