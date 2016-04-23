import {Component} from 'angular2/core';

@Component({
  selector: 'landing',
  template: `
  <div class="full-screen landing">
    <h1>{{title}}</h1>
  </div>

  `,
})

export class LandingComponent {
  title: string = "awf yearbook landing";
}


