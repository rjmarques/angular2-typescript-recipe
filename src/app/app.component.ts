import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import '../../public/scss/styles.scss';

import { AppHeaderComponent } from './common/header/app-header.component.ts';

@Component({
  selector: 'recipe-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  directives: [ ROUTER_DIRECTIVES, AppHeaderComponent ]  
})

export class AppComponent { }
