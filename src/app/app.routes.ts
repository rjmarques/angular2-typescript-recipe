import { provideRouter, RouterConfig } from '@angular/router';

import { PuppiesComponent } from './puppies';
import { OttersComponent } from './otters';
import { KittensComponent } from './kittens';

const routes: RouterConfig = [
	{
		path: 'puppies',
		component: PuppiesComponent
	},
	{
		path: 'otters',
		component: OttersComponent
	},
	{
		path: 'kittens',
		component: KittensComponent
	},
	{
		path: '',
		redirectTo: '/puppies',
		pathMatch: 'full'
	}
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];
