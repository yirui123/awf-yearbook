import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
  selector: 'how',
  template: `
  <div class="full-screen how-it-works" id="how-it-works">
    <h1>{{title}}</h1>

  </div>
  `,
})

export class HowComponent {
  title: string = "how it works";
}


