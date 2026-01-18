import { Component, input } from "@angular/core";
import { Voucher } from "./ov-voucher.service";

@Component({
  selector: 'ov-voucher-list',
  standalone: true,
  template: `
    <ul>
      @for (voucher of vouchers(); track voucher.id) {
        <li>{{ voucher.name }}</li>
      }
    </ul>
  `
})
export class OvVoucherListComponent {
  vouchers = input.required<Voucher[]>();
}