import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablePagePage } from './table-page.page';

describe('TablePagePage', () => {
  let component: TablePagePage;
  let fixture: ComponentFixture<TablePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
