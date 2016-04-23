import {Component} from 'angular2/core';

@Component({
  selector: 'awf-supporters',
  template: `
  <div class="full-screen awf-supporters" id="supporters">
    {{title}}
  <ul>
    <li *ngFor="#supporter of supporters">
     {{ supporter }}
    </li>
  </ul>
  </div>
  `
})

export class SupporterComponent {
  title: string = "wall of supporters";
  supporters = ["supporter1", "supporter2", "supporter3", "supporter4", "supporter5", "supporter6", "supporter7", "supporter8"]
}


