import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OvVoucher } from '@ov/ov-voucher';

@Component({
  imports: [OvVoucher, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'overview-web';
}
