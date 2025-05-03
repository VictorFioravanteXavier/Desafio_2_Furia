import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFansPostsComponent } from './top-fans-posts.component';

describe('TopFansPostsComponent', () => {
  let component: TopFansPostsComponent;
  let fixture: ComponentFixture<TopFansPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFansPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFansPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
