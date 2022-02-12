import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicySaleComponent } from './policy-sale.component';

describe('PolicySaleComponent', () => {
  let component: PolicySaleComponent;
  let fixture: ComponentFixture<PolicySaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicySaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
