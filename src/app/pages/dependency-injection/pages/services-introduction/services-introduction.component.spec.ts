import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesIntroductionComponent } from './services-introduction.component';

describe('ServicesIntroductionComponent', () => {
  let component: ServicesIntroductionComponent;
  let fixture: ComponentFixture<ServicesIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesIntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
