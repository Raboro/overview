import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OvVoucher } from './ov-voucher';

describe('OvVoucher', () => {
  let component: OvVoucher;
  let fixture: ComponentFixture<OvVoucher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OvVoucher],
    }).compileComponents();

    fixture = TestBed.createComponent(OvVoucher);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
