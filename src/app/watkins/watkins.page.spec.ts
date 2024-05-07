import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WatkinsPage } from './watkins.page';

describe('WatkinsPage', () => {
  let component: WatkinsPage;
  let fixture: ComponentFixture<WatkinsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WatkinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
