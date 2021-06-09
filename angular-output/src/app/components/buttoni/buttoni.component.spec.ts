import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtoniComponent } from './buttoni.component';

describe('ButtoniComponent', () => {
  let component: ButtoniComponent;
  let fixture: ComponentFixture<ButtoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtoniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
