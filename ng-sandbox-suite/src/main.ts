import {importProvidersFrom} from '@angular/core';
import {AppComponent} from './app/app.component';
import {routes} from './app/app.routing';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {provideRouter, withDebugTracing, withInMemoryScrolling} from "@angular/router";


bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule),
    provideRouter(
      routes,
      withDebugTracing(),
      withInMemoryScrolling())]
})
  .catch(err => console.error(err));
