import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routers } from './routers.ts'


import { NotesService } from './notes'
import { AppComponent } from './app.component'
import { NotesComponent } from './notes'
import { AboutComponent } from './about'
import { AuthSevice, AuthComponent } from './auth'

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, Routers ],
  declarations: [AppComponent, NotesComponent, AboutComponent, AuthComponent],
  providers: [ NotesService, AuthSevice ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
