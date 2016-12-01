import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClick()">Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent {

  onClick() {
    alert('It worked!')
  }
}
