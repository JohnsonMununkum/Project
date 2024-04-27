import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerNominiesPage } from './player-nominies.page';

describe('PlayerNominiesPage', () => {
  let component: PlayerNominiesPage;
  let fixture: ComponentFixture<PlayerNominiesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerNominiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
