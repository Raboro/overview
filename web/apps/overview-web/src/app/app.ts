import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OvVoucher } from '@ov/ov-voucher';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [OvVoucher, RouterModule, MatIcon],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  apps: AppWrapper[] = [{ name: 'Voucher', iconName: 'local_activity' }];
  selectedApp = signal<string | null>(null);

  openApp(app: string) {
    this.selectedApp.set(app);
  }

  goHome() {
    this.selectedApp.set(null);
  }
}

type AppWrapper = {
  name: string;
  iconName: string;
};
