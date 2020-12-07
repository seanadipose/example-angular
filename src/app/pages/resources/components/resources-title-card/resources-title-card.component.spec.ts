import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesTitleCardComponent } from './resources-title-card.component';

describe('ResourcesTitleCardComponent', () => {
  let component: ResourcesTitleCardComponent;
  let fixture: ComponentFixture<ResourcesTitleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesTitleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesTitleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
