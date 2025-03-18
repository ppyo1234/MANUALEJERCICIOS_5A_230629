import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BienvenidaComponent } from './app/pages/Bienvenida/Bienvenida.component';
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
import { Practica11Component } from './app/practicas/practica11/practica11.component';
import { Practica12Component } from './app/practicas/practica12/practica12.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TablaBasicaComponent } from './app/tablas/tabla-basica/tabla-basica.component';
import { TablaOpcionesComponent } from './app/tablas/tabla-opciones/tabla-opciones.component';
import { TablaJsonComponent } from './app/tablas/tabla-json/tabla-json.component';
import { TablaAjaxComponent } from './app/tablas/tabla-ajax/tabla-ajax.component';
import { provideHttpClient } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { GraficaBasicaComponent } from './app/graficas/grafica-basica/grafica-basica.component';
import { GraficaMundoComponent } from './app/graficas/grafica-mundo/grafica-mundo.component';
import { GraficaJsonComponent } from './app/graficas/grafica-json/grafica-json.component';
import { GraficaAjaxComponent } from './app/graficas/grafica-ajax/grafica-ajax.component';

bootstrapApplication(TablaAjaxComponent, {
  providers: [provideHttpClient()],
}).catch((err) => console.error(err));

// Rutas de la aplicación
const routes: Routes = [
  { path: 'Bienvenida', component: BienvenidaComponent },
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
  { path: 'practica11', component: Practica11Component},
  { path: 'practica12', component: Practica12Component},
  { path: 'tablaBasica', component: TablaBasicaComponent},
  { path: 'tablaOpciones', component: TablaOpcionesComponent},
  { path: 'tablaJSON', component: TablaJsonComponent},
  { path: 'tablaAjax', component: TablaAjaxComponent},
  { path: 'graficaBasica', component: GraficaBasicaComponent},
  { path: 'graficaMundo', component: GraficaMundoComponent},
  { path: 'graficaJson', component: GraficaJsonComponent},
  { path: 'graficaAjx', component: GraficaAjaxComponent},

  { path: '**', redirectTo: 'Bienvenida' },
];

// Aquí se realiza el bootstrap de la aplicación con AppComponent y las rutas
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideRouter(routes), provideAnimationsAsync()],
}).catch((err) => console.error(err));
