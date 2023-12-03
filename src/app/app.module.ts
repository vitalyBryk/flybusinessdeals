import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { AboutPageComponent } from './views/about-page/about-page.component';
import { ContactsPageComponent } from './views/contacts-page/contacts-page.component';
import { BeatPageComponent } from './views/beat-page/beat-page.component';
import { ToolbarComponent } from './modules/toolbar/toolbar.component';
import { FooterComponent } from './modules/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactsPageComponent,
    BeatPageComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
