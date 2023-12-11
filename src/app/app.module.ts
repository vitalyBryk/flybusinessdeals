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

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { BestDealsComponent } from './modules/best-deals/best-deals.component'
import { NumericHighlightPipe } from './pipes/numeric-highlight.pipe';
import { CountactUsComponent } from './modules/countact-us/countact-us.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { ChooseUsComponent } from './modules/choose-us/choose-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactsPageComponent,
    BeatPageComponent,
    NavbarComponent,
    FooterComponent,
    SearchFlightComponent,
    WelcomeComponent,
    BestDealsComponent,
    NumericHighlightPipe,
    CountactUsComponent,
    AboutUsComponent,
    ChooseUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
