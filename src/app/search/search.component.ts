import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent {
  constructor() {}

  refresh(): void {
    window.location.reload();
  }
}
