import { toSignal } from '@angular/core/rxjs-interop';
import { OvVoucherService, Voucher } from './ov-voucher.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { startWith, Subject, switchMap } from 'rxjs';


@Component({
  selector: 'ov-voucher',
  imports: [MatIconModule, MatButtonToggleModule],
  templateUrl: './ov-voucher.html',
  styleUrl: './ov-voucher.scss',
})
export class OvVoucher implements OnInit {
  protected ovVoucherService = inject(OvVoucherService);

  protected refresh$ = new Subject<void>()
  protected viewType = signal<'list' | 'grid'>('list');
  protected vouchers = toSignal(
    this.refresh$.pipe(
      startWith(void 0),
      switchMap(() => this.ovVoucherService.getAll())
    ),
    { initialValue: [] }
  )

  ngOnInit(): void {
    this.ovVoucherService.getAll();
  }

  refresh() {
    this.refresh$.next();
  }

  add() {
    this.ovVoucherService.add();
  }
}
