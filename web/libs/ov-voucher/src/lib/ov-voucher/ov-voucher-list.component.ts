import { Component, input } from "@angular/core";
import { Voucher } from "./ov-voucher.service";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";

@Component({
  selector: 'ov-voucher-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
  ],
  template: `
    <div class="cards-container">
      @for (voucher of vouchers(); track voucher.id) {
        <mat-card class="voucher-card" appearance="outlined">
          <mat-card-header>
            <mat-card-title>{{ voucher.name }}</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <mat-chip-set>
              <mat-chip>{{ voucher.expirationDate }}</mat-chip>
              <mat-chip>{{ voucher.value }}€</mat-chip>
            </mat-chip-set>
          </mat-card-content>
        </mat-card>
      }
    </div>
  `,
  styles: [
    `
    .cards-container {
      display: flex;
      flex-direction: column;
      gap: 2vh;
      height: 70vh;
      overflow-y: auto;
    }

    .voucher-card {
      max-height: 15vh;
    }
    `
  ]
})
export class OvVoucherListComponent {
  vouchers = input.required<Voucher[]>();
}