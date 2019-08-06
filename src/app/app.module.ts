import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import MainNav from './components/mainnav/mainnav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNav
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
