import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { rootRoutesFactory } from 'src/app/core/factories/root-routes.factory';
import { formPracticesRoutesFactory } from 'src/app/core/factories/form-practices-routes.constant';
import { routeConfigToArray } from 'src/app/core/functions/route-config-to-array.function';
import { dependencyInjectionRoutesFactory } from 'src/app/core/factories/dependency-injection-routes.factory';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

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
          <mat-toolbar color="primary" class="menu-header"></mat-toolbar>
          <div mdcListGroup>
            <button
              mdcButton
              style="width: 100%;"
              (click)="navigate([introduction.path])"
            >
              <a
                [routerLink]="introduction.path"
                routerLinkActive="selected"
                #introRla="routerLinkActive"
                style="width: 100%;"
                >Introduction</a
              >
            </button>

            <ul mdcList></ul>
            <div mdcListDivider></div>

            <button
              mdcButton
              style="width: 100%;"
              (click)="navigate([forms.path])"
            >
              <a
                [routerLink]="forms.path"
                routerLinkActive="selected"
                #formsRla="routerLinkActive"
                style="width: 100%;"
                >Forms</a
              >
              <i mdcButtonIcon class="material-icons">{{
                formsRla.isActive ? 'expand_more' : 'chevron_right'
              }}</i
              >&nbsp;
            </button>

            <ul mdcList *ngIf="formsRla.isActive" [dense]="true">
              <ng-container *ngFor="let link of formsChildren">
                <li
                  *ngIf="link.path.length > 0"
                  mdcListItem
                  [selected]="rla.isActive"
                  (click)="navigate([forms.path, link.path])"
                >
                  <a
                    mdc-list-item
                    [routerLink]="[forms.path, link.path]"
                    routerLinkActive="selected"
                    #rla="routerLinkActive"
                    style="display: block;"
                  >
                    {{ link.name }}
                  </a>

                  <!-- <i
                    mdcListItemMeta
                    class="material-icons"
                    (click)="navigate([forms.path, link.path])"
                    >chevron_right</i
                  >
                </li> -->
                </li></ng-container
              >
            </ul>
            <div mdcListDivider></div>

            <button
              mdcButton
              style="width: 100%;"
              (click)="navigate([services.path])"
            >
              <a
                [routerLink]="services.path"
                routerLinkActive="selected"
                #servicesRla="routerLinkActive"
                style="width: 100%;"
                >Services</a
              >
              <i mdcButtonIcon class="material-icons">{{
                servicesRla.isActive ? 'expand_more' : 'chevron_right'
              }}</i
              >&nbsp;
            </button>

            <ul mdcList *ngIf="servicesRla.isActive" [dense]="true">
              <ng-container *ngFor="let link of servicesChildren">
                <li
                  *ngIf="link.path.length > 0"
                  mdcListItem
                  [selected]="rla.isActive"
                  (click)="navigate([services.path, link.path])"
                >
                  <a
                    [routerLink]="[services.path, link.path]"
                    routerLinkActive="selected"
                    #rla="routerLinkActive"
                    style="display: block;"
                  >
                    {{ link.name }}
                  </a>

                  <!-- <i
                    mdcListItemMeta
                    class="material-icons"
                    (click)="navigate([services.path, link.path])"
                    >chevron_right</i
                  > -->
                </li>
              </ng-container>
            </ul>
            <div mdcListDivider></div>
            <button
              mdcButton
              style="width: 100%;"
              (click)="navigate([resources.path])"
            >
              <a
                [routerLink]="resources.path"
                routerLinkActive="selected"
                #resourcesRla="routerLinkActive"
                style="width: 100%;"
                >Resources</a
              >
            </button>

            <ul></ul>
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
  resources = rootRoutes.resources;
  formsChildren = routeConfigToArray(formPracticesRoutesFactory());
  introduction = rootRoutes.introduction;
  services = rootRoutes.services;
  servicesChildren = routeConfigToArray(dependencyInjectionRoutesFactory());

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  navigate(rl: string[]) {
    console.log(rl);
    this.router.navigate(rl, { relativeTo: this.route });
  }
}
