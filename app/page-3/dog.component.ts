import {Component} from 'angular2/core';

@Component({
  selector: 'awf-dogs',
  template: `
  <div class="full-screen awf-dogs" id="dogs">
    <h1>{{title}}</h1>
  <ul>
    <li *ngFor="#dog of dogs">
     {{ dog }}
    </li>
  </ul>
  </div>
  `
})

export class DogComponent {
  title: string = "meet the dogs saving africa's wildlife";
  dogs = ["dog1", "dog2", "dog3", "dog4", "dog5", "dog6", "dog7", "dog8"]
}


