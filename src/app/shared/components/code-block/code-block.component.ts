import { Component, Input, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-code-block',
  template: `
    <pre><code [highlight]="code" (highlighted)="onHighlight($event)" [lineNumbers]="true"></code></pre>
  `,
  styleUrls: ['./code-block.component.scss'],
})
export class CodeBlockComponent implements OnInit {
  @Input() code: string;
  constructor() {}

  ngOnInit(): void {}
  response: HighlightResult;

  onHighlight(e) {
    console.log(e);
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}',
    };
  }
}
