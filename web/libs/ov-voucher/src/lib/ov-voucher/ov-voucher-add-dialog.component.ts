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
    <h2 mat-dialog-title>Create new voucher</h2>
    <input type="text" [formField]="form.name" />
    <input type="number" [formField]="form.value" />

    <div mat-dialog-actions>
      <button mat-button (click)="cancel()">Cancel</button>
      <button
        mat-raised-button
        color="primary"
        (click)="onSubmit()"
        [disabled]="form().invalid()"
      >
        Add
      </button>
    </div>
  `,
  styles: [
    `
      .full {
        width: 100%;
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
