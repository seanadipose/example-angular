import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-card',
  template: `
    <mat-card>
      <mat-card-title>
        <mat-toolbar><ng-content select="card-title"></ng-content></mat-toolbar>
      </mat-card-title>
      <mat-card-subtitle>
        <h3><ng-content select="card-subtitle"></ng-content></h3>
      </mat-card-subtitle>
      <mat-card-content>
        <ng-content select="card-content"></ng-content>
      </mat-card-content>
      <mat-card-actions>
        <ng-content select="card-actions"></ng-content>
      </mat-card-actions>

      <mat-card-footer *ngIf="docLink">
        <a [href]="docLink">
          <button mat-button>Angular Resources</button>
        </a>
      </mat-card-footer>
    </mat-card>
  `,
  styleUrls: ['./title-card.component.scss'],
})
export class TitleCardComponent implements OnInit {
  @Input() docLink: string;

  constructor() {}

  ngOnInit(): void {}
}
