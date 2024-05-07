import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FodenPage } from './foden.page';

describe('FodenPage', () => {
  let component: FodenPage;
  let fixture: ComponentFixture<FodenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FodenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
