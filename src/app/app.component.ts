import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}, Gian que so pa con tigo, un test mas?</div>`,
})
export class AppComponent {
  value = 'World';
}
