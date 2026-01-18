import { Component, inject, signal } from "@angular/core";
import { ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogRef } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { VoucherCreation } from "./ov-voucher.service";
import { form, FormField } from "@angular/forms/signals";

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
    FormField
  ],
  template: `
    <h2 mat-dialog-title>Create new voucher</h2>
    <input type="text" [formField]="voucherCreationForm.name" />
    <input type="number" [formField]="voucherCreationForm.value" />

    <div mat-dialog-actions>
      <button mat-button (click)="cancel()">Cancel</button>
      <button mat-raised-button color="primary" (click)="add()">
        Add
      </button>
    </div>
  `,
  styles: [`.full { width: 100%; }`]
})
export class OvVoucherAddDialog {
  private dialogRef = inject(MatDialogRef<OvVoucherAddDialog>);
  private fb = inject(FormBuilder);

  private voucherCreationModel = signal<VoucherCreation>({
    name: '',
    value: 0,
    expirationDate: new Date(),
    redeemed: false
  })

  protected voucherCreationForm = form(this.voucherCreationModel);

  form = this.fb.group({
    name: ['', Validators.required],
    date: [new Date()],
    expired: [false, Validators.required],
    value: [0, Validators.required]
  });

  cancel() {
    this.dialogRef.close();
  }

  add() {
    const newVoucher = this.form.getRawValue() as unknown as VoucherCreation;
    this.dialogRef.close(newVoucher);
  }
}