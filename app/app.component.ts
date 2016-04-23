import {Component} from 'angular2/core';

import {LandingComponent} from './page-1/landing.component';
import {HowComponent} from './page-2/how.component';
import {DogComponent} from './page-3/dog.component';
import {FormComponent} from './page-4/form.component';
import {SupporterComponent} from './page-5/supporter.component';
import {NavComponent} from './nav.component';

import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper'

@Component({
    selector: 'my-app',
    template: `
    <nav-bar></nav-bar>
    <landing></landing>
    <how></how>
    <awf-dogs></awf-dogs>
    <msg-form></msg-form>
    <awf-supporters></awf-supporters>
    `,
    directives: [NavComponent, LandingComponent, FormComponent, DogComponent, SupporterComponent, HowComponent],
})
export class AppComponent { }
