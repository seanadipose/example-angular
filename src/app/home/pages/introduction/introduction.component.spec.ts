import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FORMS_INTRODUCTION_CARDS } from 'src/app/core/constants/introduction-cards.constant';
import { INTRODUCTION_CARDS_TOKEN } from 'src/app/core/tokens/dashboard-cards.token';
import { DashboardCard } from 'src/app/shared/models/dashboard-card.model';

import { IntroductionComponent } from './introduction.component';

describe('IntroductionComponent', () => {
  let component: IntroductionComponent;
  let fixture: ComponentFixture<IntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroductionComponent],
      providers: [
        {
          provider: INTRODUCTION_CARDS_TOKEN,
          useValue: FORMS_INTRODUCTION_CARDS,
        },
      ],
    }).compileComponents();
    TestBed.overrideProvider(INTRODUCTION_CARDS_TOKEN, {
      useValue: [...FORMS_INTRODUCTION_CARDS],
    });
    fixture = TestBed.createComponent(IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
