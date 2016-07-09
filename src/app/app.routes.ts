import { provideRouter, RouterConfig }  from '@angular/router';
import { PuppiesComponent } from './puppies/puppies.component';
import { OttersComponent } from './otters/otters.component';
import { KittensComponent } from './kittens/kittens.component';

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
