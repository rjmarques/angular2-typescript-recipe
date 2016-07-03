import { provideRouter, RouterConfig }  from '@angular/router';
import { PuppiesComponent } from './puppies/puppies.component';
import { OttersComponent } from './otters/otters.component';

const routes: RouterConfig = [
  {
	  path: '',
    redirectTo: '/puppies',
    pathMatch: 'full'
  },
  {
    path: 'puppies',
    component: PuppiesComponent
  },
  {
    path: 'otters',
    component: OttersComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
