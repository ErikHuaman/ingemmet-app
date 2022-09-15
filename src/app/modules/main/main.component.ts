import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="flex h-auto  w-full">
      <div class="w-sidebar h-full">
        <app-sidebar></app-sidebar>
      </div>
      <div class="w-main-container bg-black">
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
