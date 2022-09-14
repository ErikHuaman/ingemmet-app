import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="h-full">
      <div class="flex">
        <div class="w-sidebar h-full">
          <app-sidebar></app-sidebar>
        </div>
        <div class="grow bg-black">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
