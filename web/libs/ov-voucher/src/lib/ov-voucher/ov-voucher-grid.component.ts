import { Component, input } from "@angular/core";
import { Voucher } from "./ov-voucher.service";

@Component({
  selector: 'ov-voucher-grid',
  standalone: true,
  template: `
    <div class="grid">
      @for (voucher of vouchers(); track voucher.id) {
        <div class="card">
          {{ voucher.name }}
        </div>
      }
    </div>
  `,
  styles: [`
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
    }
    .card {
      padding: 16px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
  `]
})
export class OvVoucherGridComponent {
  vouchers = input.required<Voucher[]>();
}