import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchInsightsComponent } from './match-insights.component';

describe('MatchInsightsComponent', () => {
  let component: MatchInsightsComponent;
  let fixture: ComponentFixture<MatchInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchInsightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
