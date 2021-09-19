import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ENVIRONMENT_TOKEN } from "./core/tokens/environment-token";
import { GLOBAL_TOKEN } from "./core/tokens/global-token";
import { Environment } from "./core/interfaces/environment";

declare global {
  interface Window {
    __env: Environment;
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    {
      provide: ENVIRONMENT_TOKEN,
      useFactory: (global: Window) => global.__env,
      deps: [GLOBAL_TOKEN],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
