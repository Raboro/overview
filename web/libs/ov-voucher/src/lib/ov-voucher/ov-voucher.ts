import { toSignal } from '@angular/core/rxjs-interop';
import { OvVoucherService } from './ov-voucher.service';
import { Component, inject, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { startWith, Subject, switchMap } from 'rxjs';
import { OvVoucherListComponent } from './ov-voucher-list.component';
import { OvVoucherGridComponent } from './ov-voucher-grid.component';

@Component({
  selector: 'ov-voucher',
  imports: [
    MatIconModule,
    MatButtonToggleModule,
    OvVoucherListComponent,
    OvVoucherGridComponent,
  ],
  templateUrl: './ov-voucher.html',
  styleUrl: './ov-voucher.scss',
})
export class OvVoucher {
  protected ovVoucherService = inject(OvVoucherService);

  protected refresh$ = new Subject<void>();
  protected viewType = signal<'list' | 'grid'>('list');
  protected vouchers = toSignal(
    this.refresh$.pipe(
      startWith(void 0),
      switchMap(() => this.ovVoucherService.getAll()),
    ),
    { initialValue: [] },
  );

  refresh() {
    this.refresh$.next();
  }

  add() {
    this.ovVoucherService.add();
  }
}
