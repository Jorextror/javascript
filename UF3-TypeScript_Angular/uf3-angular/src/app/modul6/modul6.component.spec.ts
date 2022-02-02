import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modul6Component } from './modul6.component';

describe('Modul6Component', () => {
  let component: Modul6Component;
  let fixture: ComponentFixture<Modul6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modul6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Modul6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
