import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { AboutPageComponent } from './views/about-page/about-page.component';
import { ContactsPageComponent } from './views/contacts-page/contacts-page.component';
import { BeatPageComponent } from './views/beat-page/beat-page.component';
import { FooterComponent } from './modules/footer/footer.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { SearchFlightComponent } from './modules/search-flight/search-flight.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactsPageComponent,
    BeatPageComponent,
    NavbarComponent,
    FooterComponent,
    SearchFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
