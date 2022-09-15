import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ingemmet-app';

  ngOnInit(): void {
    var outer = document.createElement('div');
    outer.setAttribute(
      'style',
      'visibility: hidden; width: 100%; -ms-overflow-style: scrollbar;'
    );

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = 'scroll';

    // add innerdiv
    var inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode!.removeChild(outer);

    setTimeout(() => {
      $('body').css({
        width: 'calc(100vw - ' + (widthNoScroll - widthWithScroll) + 'px)',
      });
    });
  }
}
