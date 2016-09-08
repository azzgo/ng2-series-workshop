import { bootstrap } from '@angular/platform-browser-dynamic'
import { disableDeprecatedForms, provideForms } from '@angular/forms'
import { provideRouter } from '@angular/router';

import { App, routes } from './app'

bootstrap(App, [ disableDeprecatedForms(), provideForms(), provideRouter(routes) ])

