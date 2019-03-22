import { Component } from '@angular/core';
declare var sortable: any;

@Component({
  selector: 'my-sortable',
  templateUrl: './sortable.component.html'
})
export class SortableComponent {
  name = 'Angular';

  onClick() {

  }
  ngOnInit() {
    sortable('.sortable');
  }
}
