import {Component} from 'angular2/core';

@Component({
  selector: 'msg-form',
  template: `
  <div class="full-screen sign-up-page" id="sign-up" ng-show="tab === 1">
    <h1>{{title}}</h1>
  </div>
  `
})
export class FormComponent {
  title: string = "Wish our pups good luck";
}


