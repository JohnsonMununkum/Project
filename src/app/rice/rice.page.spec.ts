import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RicePage } from './rice.page';

describe('RicePage', () => {
  let component: RicePage;
  let fixture: ComponentFixture<RicePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
