import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotxeComponent } from './cotxe.component';

describe('CotxeComponent', () => {
  let component: CotxeComponent;
  let fixture: ComponentFixture<CotxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotxeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
