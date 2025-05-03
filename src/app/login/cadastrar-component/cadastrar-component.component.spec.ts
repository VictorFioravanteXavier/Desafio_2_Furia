import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarComponentComponent } from './cadastrar-component.component';

describe('CadastrarComponentComponent', () => {
  let component: CadastrarComponentComponent;
  let fixture: ComponentFixture<CadastrarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
