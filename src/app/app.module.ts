import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HoursComponent } from './hours/hours.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SlectTestComponent } from './slect-test/slect-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HoursComponent,
    MainPageComponent,
    SlectTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
