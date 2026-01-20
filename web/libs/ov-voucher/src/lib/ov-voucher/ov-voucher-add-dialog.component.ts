import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { VoucherCreation } from './ov-voucher.service';
import { form, FormField, min, required } from '@angular/forms/signals';

@Component({
  standalone: true,
  selector: 'app-my-dialog',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormField,
  ],
  template: `
    <div class="container">
      <h2 mat-dialog-title>Create new voucher</h2>

      <mat-form-field appearance="fill" class="full-width">
        <mat-label>Name</mat-label>
        <input matInput type="text" [formField]="form.name" />
      </mat-form-field>

      <mat-form-field appearance="fill" class="full-width">
        <mat-label>Value</mat-label>
        <input matInput type="number" [formField]="form.value" />
      </mat-form-field>

      <div class="spacer"></div>

      <div mat-dialog-actions class="actions">
        <button mat-button class="action-btn" (click)="cancel()">
          Cancel
        </button>

        <button
          mat-raised-button
          color="primary"
          class="action-btn"
          (click)="onSubmit()"
          [disabled]="form().invalid()"
        >
          Add
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        min-height: 35vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
      }

      .spacer {
        flex: 1;
      }

      .full-width {
        width: 100%;
        max-width: 320px;
      }

      .actions {
        display: flex;
        gap: 16px;
        margin-top: 24px;
      }

      .action-btn {
        min-width: 6vw;
        min-height: 4vh;
        padding: 12px 24px;
        font-size: 16px;
      }
    `,
  ],
})
export class OvVoucherAddDialog {
  private dialogRef = inject(MatDialogRef<OvVoucherAddDialog>);

  private voucherCreationModel = signal<VoucherCreation>({
    name: '',
    value: 0,
    expirationDate: new Date(),
    redeemed: false,
  });

  protected form = form(this.voucherCreationModel, (schemaPath) => {
    required(schemaPath.name);
    required(schemaPath.value);
    min(schemaPath.value, 0);
  });

  cancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    const newVoucher = this.voucherCreationModel();
    this.dialogRef.close(newVoucher);
  }
}
