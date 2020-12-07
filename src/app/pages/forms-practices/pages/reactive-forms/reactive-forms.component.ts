import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-forms',
  template: `
    <mat-toolbar color="accent">Reactive Forms</mat-toolbar>
    <app-page-container>
      <p>
        Angular is very strong at forms. I recommend using only reactive driven
        forms. Learning them is strictly about learning the API. Template driven
        forms are not maintainable without additional libraries, in my opinion.
      </p>
      <a href="https://angular.io/guide/reactive-forms">Reactive Forms</a>
      <p>
        The examples below show 3 different ways to declare new forms. This is
        taken from this tutorial:

        <a
          href="https://malcoded.com/posts/angular-fundamentals-reactive-forms/"
          >Reactive Forms</a
        >
      </p>

      <div
        fxLayout="row"
        fxLayoutAlign="space-between center"
        class="examples-row"
      >
        <div>
          <h2>
            FormGroup
            <app-repo-link
              link="https://github.com/seanadipose/example-angular/blob/master/src/app/pages/forms-practices/components/formgroup/formgroup.component.ts"
            ></app-repo-link>
          </h2>
          <app-formgroup></app-formgroup>
        </div>
        <div>
          <h2>
            Formbuilder<app-repo-link
              link="https://github.com/seanadipose/example-angular/blob/master/src/app/pages/forms-practices/components/formbuilder/formbuilder.component.ts"
            ></app-repo-link>
          </h2>
          <app-formbuilder></app-formbuilder>
        </div>
        <div>
          <h2>
            Formbuilder with Class<app-repo-link
              link="https://github.com/seanadipose/example-angular/blob/master/src/app/pages/forms-practices/components/formbuilder-class/formbuilder-class.component.ts"
            ></app-repo-link>
          </h2>
          <app-formbuilder-class></app-formbuilder-class>
        </div>
      </div>
    </app-page-container>
  `,
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
