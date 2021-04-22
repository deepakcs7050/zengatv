import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponsUserComponent } from './coupons-user.component';

describe('CouponsUserComponent', () => {
  let component: CouponsUserComponent;
  let fixture: ComponentFixture<CouponsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
