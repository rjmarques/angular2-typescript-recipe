import { Component } from '@angular/core';

import { AppHeaderComponent } from './shared';
import '../../public/scss/styles.scss';

@Component({
	selector: 'recipe-app',
	template: require('./app.component.html'),
	styles: [require('./app.component.scss')],
	directives: [ AppHeaderComponent ]
})

export class AppComponent { }
