import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListAdsComponent } from './list-ads/list-ads.component';

import { AuthService } from './login/auth.service';


@NgModule({
  declarations: [ AppComponent, LoginComponent, ListAdsComponent ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [ AuthService, AuthGuard ], //escopo global
  bootstrap: [ AppComponent ]
})
export class AppModule { }
