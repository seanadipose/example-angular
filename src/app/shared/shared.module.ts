import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EaFormsModule } from '../modules/forms/forms.module';
import { TitleCardComponent } from './components/title-card/title-card.component';
import { DashboardListComponent } from './components/dashboard-list/dashboard-list.component';
import { RepoLinkButtonComponent } from './components/repo-link-button/repo-link-button.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CenteredContainerComponent } from './components/centered-container/centered-container.component';
import { CodeBlockComponent } from './components/code-block/code-block.component';
import { HighlightModule } from 'ngx-highlightjs';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';

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
  MatTooltipModule,
  FlexLayoutModule,
];

@NgModule({
  declarations: [
    PageContainerComponent,
    DashboardComponent,
    TitleCardComponent,
    DashboardListComponent,
    RepoLinkButtonComponent,
    CenteredContainerComponent,
    CodeBlockComponent,
  ],
  imports: [CommonModule, ...matModules, EaFormsModule, HighlightModule],
  exports: [
    PageContainerComponent,
    DashboardComponent,
    ...matModules,
    TitleCardComponent,
    DashboardListComponent,
    RepoLinkButtonComponent,
    CenteredContainerComponent,
    CodeBlockComponent,
  ],
})
export class SharedModule {}
