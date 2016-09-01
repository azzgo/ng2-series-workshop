import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesComponent } from './notes'
import { AboutComponent } from './about'

const appRouter: Routes = [
  { path: 'notes', component: NotesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'notes' }
];

export const Routers: ModuleWithProviders =  RouterModule.forRoot(appRouter);
