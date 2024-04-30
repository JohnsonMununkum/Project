import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PalmerPage } from './palmer.page';

describe('PalmerPage', () => {
  let component: PalmerPage;
  let fixture: ComponentFixture<PalmerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
