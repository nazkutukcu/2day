import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visitor2Component } from './visitor2.component';

describe('Visitor2Component', () => {
  let component: Visitor2Component;
  let fixture: ComponentFixture<Visitor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Visitor2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visitor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
