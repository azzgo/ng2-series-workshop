import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesComponent } from './notes'
import { AboutComponent } from './about'
import { AuthSevice, AuthComponent } from './auth'

const appRouter: Routes = [
  { path: 'notes', canActivate: [ AuthSevice ], component: NotesComponent },
  { path: 'about', canActivate: [ AuthSevice ], component: AboutComponent },
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: 'notes' }
];

export const Routers: ModuleWithProviders =  RouterModule.forRoot(appRouter);
