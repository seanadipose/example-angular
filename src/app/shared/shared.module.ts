import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const matModules = [
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
];

@NgModule({
  declarations: [PageContainerComponent, DashboardComponent],
  imports: [CommonModule, ...matModules],
  exports: [PageContainerComponent, DashboardComponent, ...matModules],
})
export class SharedModule {}
