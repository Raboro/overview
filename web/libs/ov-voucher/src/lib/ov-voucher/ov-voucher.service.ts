import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OvVoucherService {
  private http = inject(HttpClient);

  getAll(): Observable<Voucher[]> {
    return this.http.get<Voucher[]>(
      'http://localhost:8080/api/overview-server/v1/voucher-app/voucher',
    );
  }

  add() {
    this.http
      .post<VoucherCreation>(
        'http://localhost:8080/api/overview-server/v1/voucher-app/voucher',
        {
          name: 'Test',
          value: 10.1,
          expirationDate: new Date(),
          redeemed: false,
        },
      )
      .subscribe((voucher) => {
        console.log(voucher);
      });
  }
}

export interface Voucher extends VoucherCreation {
  id: number;
}

export interface VoucherCreation {
  name: string;
  value: number;
  expirationDate: Date;
  redeemed: boolean;
}
