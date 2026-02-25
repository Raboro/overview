import { Component, input } from "@angular/core";
import { Voucher } from "./ov-voucher.service";
import { MatChipsModule } from "@angular/material/chips";

@Component({
  selector: 'ov-voucher-grid',
  standalone: true,
  template: `
    <div class="grid">
      @for (voucher of vouchers(); track voucher.id) {
        <div class="voucher-card">
          <b>{{ voucher.name }}</b>
          <div class="voucher-card-content">
            <mat-chip>{{ voucher.expirationDate }}</mat-chip>
            <mat-chip>{{ voucher.value }}€</mat-chip>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 0.75rem;

      height: 89vh;
      overflow-y: auto;

      align-items: start;
      align-content: start;
      margin-top: 2vh;
    }

    .voucher-card {
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 15px;
    }

    .voucher-card-content {
      display: flex;
      flex-direction: row;
      gap: 0.4vw;
      padding-top: 1vh;
    }
  `],
  imports: [MatChipsModule]
})
export class OvVoucherGridComponent {
  vouchers = input.required<Voucher[]>();
}