import { Component } from '@angular/core';
import '../../public/scss/styles.scss';

import { AppHeaderComponent } from './shared/header/app-header.component.ts';

@Component({
	selector: 'recipe-app',
	template: require('./app.component.html'),
	styles: [require('./app.component.scss')],
	directives: [ AppHeaderComponent ]
})

export class AppComponent { }
