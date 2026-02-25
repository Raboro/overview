import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OvVoucher } from '@ov/ov-voucher';

@Component({
  imports: [OvVoucher, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  apps = ['Voucher'];
  selectedApp = signal<string | null>(null);

  openApp(app: string) {
    this.selectedApp.set(app);
  }

  goHome() {
    this.selectedApp.set(null);
  }
}