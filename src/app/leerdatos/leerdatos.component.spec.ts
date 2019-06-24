import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerdatosComponent } from './leerdatos.component';

describe('LeerdatosComponent', () => {
  let component: LeerdatosComponent;
  let fixture: ComponentFixture<LeerdatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerdatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerdatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
