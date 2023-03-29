import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}, Gian que so pa con tigo?</div>`,
})
export class AppComponent {
  value = 'World';
}
