import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `<h1>Welcome overview-web 👋</h1>
    <button (click)="getAll()">Get All</button
    ><button (click)="add()">Add new</button>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {
  appService = inject(AppService);

  getAll() {
    this.appService.getAll();
  }

  add() {
    this.appService.add();
  }
}
