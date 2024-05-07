import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HallandPage } from './halland.page';

describe('HallandPage', () => {
  let component: HallandPage;
  let fixture: ComponentFixture<HallandPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HallandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
