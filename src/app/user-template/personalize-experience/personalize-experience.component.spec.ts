import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizeExperienceComponent } from './personalize-experience.component';

describe('PersonalizeExperienceComponent', () => {
  let component: PersonalizeExperienceComponent;
  let fixture: ComponentFixture<PersonalizeExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalizeExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
