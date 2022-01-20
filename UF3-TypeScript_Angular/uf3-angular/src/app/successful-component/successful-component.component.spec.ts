import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulComponentComponent } from './successful-component.component';

describe('SuccessfulComponentComponent', () => {
  let component: SuccessfulComponentComponent;
  let fixture: ComponentFixture<SuccessfulComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
