import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ingemmet-loading',
  templateUrl: './ingemmet-loading.component.html'
})
export class IngemmetLoadingComponent{

  @Input() loading: boolean = false;

}
