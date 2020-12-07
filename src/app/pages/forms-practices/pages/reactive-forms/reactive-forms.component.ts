import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-forms',
  template: `
    <app-page-container>
      <h1>Reactive Forms</h1>
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

      <h2>FormGroup</h2>
      <app-formgroup></app-formgroup>
      <h2>Formbuilder</h2>
      <app-formbuilder></app-formbuilder>

      <h2>Formbuilder with Class</h2>
      <app-formbuilder-class></app-formbuilder-class>
    </app-page-container>
  `,
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
