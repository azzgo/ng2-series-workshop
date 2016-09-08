import { RouteConfig } from '@angular/router';

import { Home } from './home'
import { About } from './about'

export const routes: RouteConfig[] = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: '**', redirectTo: 'home' }
];
