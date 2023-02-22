import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildStockDetailComponent } from './child-stock-detail.component';

describe('ChildStockDetailComponent', () => {
  let component: ChildStockDetailComponent;
  let fixture: ComponentFixture<ChildStockDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildStockDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildStockDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
