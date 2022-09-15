import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="flex w-full">
      <div class="w-sidebar">
        <app-sidebar></app-sidebar>
      </div>
      <div class="w-main-container bg-gray">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [``],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
