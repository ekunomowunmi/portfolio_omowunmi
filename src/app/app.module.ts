import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NguiInviewModule, NguiListModule, NguiUtilsModule } from '@ngui/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { NavbarModule, WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    NguiInviewModule,NguiListModule, NguiUtilsModule,LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
