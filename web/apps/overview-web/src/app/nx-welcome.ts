import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OvVoucher } from '@ov/ov-voucher';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, OvVoucher],
  template: `<h1>Welcome overview-web 👋</h1>
    <ov-voucher></ov-voucher>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {
}
