import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { AboutPageComponent } from './views/about-page/about-page.component';
import { ContactsPageComponent } from './views/contacts-page/contacts-page.component';
import { BeatPageComponent } from './views/beat-page/beat-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
  },
  {
    path: 'beat',
    component: BeatPageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
