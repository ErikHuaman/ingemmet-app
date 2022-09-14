import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="vw-100 vh-100">
      <div class="d-flex h-100">
        <div class="wr-14">
          <app-sidebar></app-sidebar>
        </div>
        <div class="flex-grow-1">
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
