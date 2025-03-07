import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { Page1Component } from './app/pages/page1/page1.component';
import { Page2Component } from './app/pages/page2/page2.component';
import { Page3Component } from './app/pages/page3/page3.component';
import { Practica1Component } from './app/practicas/practica1/practica1.component';
import { Practica2Component } from './app/practicas/practica2/practica2.component';
import { Practica3Component } from './app/practicas/practica3/practica3.component';
import { Practica4Component } from './app/practicas/practica4/practica4.component';
import { Practica5Component } from './app/practicas/practica5/practica5.component';
import { Practica6Component } from './app/practicas/practica6/practica6.component';
import { Practica7Component } from './app/practicas/practica7/practica7.component';
import { Practica8Component } from './app/practicas/practica8/practica8.component';
import { Practica9Component } from './app/practicas/practica9/practica9.component';
import { Practica10Component } from './app/practicas/practica10/practica10.component';

const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'practica1', component: Practica1Component},
  { path: 'practica2', component: Practica2Component},
  { path: 'practica3', component: Practica3Component},
  { path: 'practica4', component: Practica4Component},
  { path: 'practica5', component: Practica5Component},
  { path: 'practica6', component: Practica6Component},
  { path: 'practica7', component: Practica7Component},
  { path: 'practica8', component: Practica8Component},
  { path: 'practica9', component: Practica9Component},
  { path: 'practica10', component: Practica10Component},
  { path: '**', redirectTo: 'page1' },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
