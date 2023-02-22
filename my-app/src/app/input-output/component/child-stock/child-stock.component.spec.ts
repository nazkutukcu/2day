import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildStockComponent } from './child-stock.component';

describe('ChildStockComponent', () => {
  let component: ChildStockComponent;
  let fixture: ComponentFixture<ChildStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
