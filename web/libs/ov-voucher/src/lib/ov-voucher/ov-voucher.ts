import { OvVoucherService } from './ov-voucher.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'ov-voucher',
  imports: [],
  templateUrl: './ov-voucher.html',
  styleUrl: './ov-voucher.scss',
})
export class OvVoucher {
  ovVoucherService = inject(OvVoucherService);

  getAll() {
    this.ovVoucherService.getAll();
  }

  add() {
    this.ovVoucherService.add();
  }
}
