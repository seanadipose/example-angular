import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsIntroductionComponent } from './forms-introduction.component';

describe('FormsIntroductionComponent', () => {
  let component: FormsIntroductionComponent;
  let fixture: ComponentFixture<FormsIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsIntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
