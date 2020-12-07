import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { rootRoutesFactory } from 'src/app/core/factories/root-routes.factory';
import { formPracticesRoutesFactory } from 'src/app/core/factories/form-practices-routes.constant';
import { routeConfigToArray } from 'src/app/core/functions/route-config-to-array.function';

const rootRoutes = rootRoutesFactory();

@Component({
  selector: 'app-navigation',
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav
        #drawer
        class="sidenav"
        fixedInViewport
        [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
        [mode]="(isHandset$ | async) ? 'over' : 'side'"
        [opened]="(isHandset$ | async) === false"
      >
        <div class="fit-menu">
          <mat-toolbar color="primary" class="menu-header">Menu</mat-toolbar>
          <div fxLayout="column" fxLayoutAlign="start start" fxLayoutGap="5px">
            <mat-list>
              <a
                mat-list-item
                [routerLink]="introduction.path"
                routerLinkActive="selected"
                #introRla="routerLinkActive"
                ><h2 class="mat-primary">Introduction</h2></a
              >

              <mat-list-item>
                <div fxLayout="column">
                  <a
                    matLine
                    [routerLink]="forms.path"
                    routerLinkActive="selected"
                    #formsRla="routerLinkActive"
                    ><h2 class="mat-primary">Forms</h2></a
                  >
                  <mat-nav-list *ngIf="formsRla.isActive">
                    <ng-container *ngFor="let link of formsChildren">
                      <a
                        *ngIf="link.path.length > 0"
                        mat-list-item
                        [routerLink]="[forms.path, link.path]"
                        routerLinkActive="selected"
                        #rla="routerLinkActive"
                      >
                        <button
                          mat-button
                          color="{{ rla.isActive ? 'primary' : '' }}"
                        >
                          {{ $any(link.name) }}
                          >
                        </button>
                      </a>
                    </ng-container>
                  </mat-nav-list>
                </div>
              </mat-list-item>
            </mat-list>
          </div>
        </div>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
          >
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
          <span>Angular Examples</span>
        </mat-toolbar>
        <!-- Add Content Here -->
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  forms = rootRoutes.forms;
  formsChildren = routeConfigToArray(formPracticesRoutesFactory());
  introduction = rootRoutes.introduction;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
