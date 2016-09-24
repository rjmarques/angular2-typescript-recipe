import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuppiesComponent } from '../../puppies';
import { OttersComponent } from '../../otters';
import { KittensComponent } from '../../kittens';

const appHeaderRoutes: Routes = [
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

export const appHeaderRouting: ModuleWithProviders = RouterModule.forChild(appHeaderRoutes);