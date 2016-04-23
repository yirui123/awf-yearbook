import {Component} from 'angular2/core';
import {ElementRef} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, RouterLink} from "angular2/router";

declare var jQuery: any;

@Component({
  selector: 'nav-bar',
  template: `
  <div class="button_container" id="toggle">
    <span class="top"></span>
    <span class="middle"></span>
    <span class="bottom"></span>
  </div>

  <div class="overlay" id="overlay">
  <nav class="overlay-menu">
    <li><a href="#">our program</a></li>
    <li><a href="#">meet the dogs</a></li>
    <li><a href="#">wish them luck</a></li>
    <li><a href="#">wall of supporters</a></li>
  </nav>
  </div>
  `,
})

export class NavComponent implements OnInit {
  constructor (private _elRef: ElementRef) {}

  ngOnInit():any {
    jQuery(this._elRef.nativeElement).find('#toggle').on('click', function(){
      jQuery(this).toggleClass('active');
      jQuery('#overlay').toggleClass('open');
    });
  }
}


