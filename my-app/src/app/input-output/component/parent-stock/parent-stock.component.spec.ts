import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentStockComponent } from './parent-stock.component';

describe('ParentStockComponent', () => {
  let component: ParentStockComponent;
  let fixture: ComponentFixture<ParentStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
