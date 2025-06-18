import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './pages/contact/contact';
import { Eula } from './pages/eula/eula';
import { Privacy } from './pages/privacy/privacy';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'privacy', component: Privacy },
  { path: 'eula', component: Eula },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: 'home' },
];
