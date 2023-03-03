import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visitor3Component } from './visitor3.component';

describe('Visitor3Component', () => {
  let component: Visitor3Component;
  let fixture: ComponentFixture<Visitor3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Visitor3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visitor3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
