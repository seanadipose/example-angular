import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoLinkButtonComponent } from './repo-link-button.component';

describe('RepoLinkButtonComponent', () => {
  let component: RepoLinkButtonComponent;
  let fixture: ComponentFixture<RepoLinkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoLinkButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoLinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
