import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesWhyComponent } from './services-why.component';

describe('ServicesWhyComponent', () => {
  let component: ServicesWhyComponent;
  let fixture: ComponentFixture<ServicesWhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesWhyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
