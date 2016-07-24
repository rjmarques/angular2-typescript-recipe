import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app-header',
  template: require('./app-header.component.html'),
  styles: [require('./app-header.component.scss')],
  directives: [ ROUTER_DIRECTIVES ]
})

export class AppHeaderComponent { }