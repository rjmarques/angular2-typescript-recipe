import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import '../../public/scss/styles.scss';

@Component({
  selector: 'recipe-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent { }
