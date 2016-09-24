import { NgModule } from '@angular/core';  

import { AppHeaderComponent, appHeaderRouting } from './header';

@NgModule({
	imports: [
		appHeaderRouting
	],
	exports: [
		AppHeaderComponent,
	],
	providers: [],
	declarations: [
		AppHeaderComponent
	]
})

export class SharedModule { } 