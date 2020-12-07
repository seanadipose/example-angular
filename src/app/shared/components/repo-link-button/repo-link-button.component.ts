import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-link',
  template: `
    <a href="{{ link }}" target="_blank" matTooltip="Open repo in new window">
      <button mat-icon-button><mat-icon>open_in_new</mat-icon></button>
    </a>
  `,
  styleUrls: ['./repo-link-button.component.scss'],
})
export class RepoLinkButtonComponent implements OnInit {
  @Input() link: string;

  constructor() {}

  ngOnInit(): void {}
}
