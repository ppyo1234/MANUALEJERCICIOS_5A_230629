import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, MatExpansionModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  practicas = [
    
    {
      nombre: 'Componentes en Angular',
      objetivo: 'Aprender sobre componentes',
      descripcion: 'Creación de un componente básico, incluyendo la estructura, cómo se enlazan los elementos HTML, CSS y TypeScript, y cómo usar el decorador @Component.',
      unidad: 2,
      ruta: '/practica1',
    },
    { nombre: 'Componentes en Angular', objetivo: 'Aprender sobre componentes', descripcion: 'Creación de un componente básico en Angular, explorando su estructura y funcionamiento con HTML, CSS y TypeScript.', unidad: 2, ruta: '/practica1' },
    { nombre: 'Actualización de la Clase de Componente', objetivo: 'Modificar la clase de un componente', descripcion: 'Explorar cómo actualizar y modificar la clase de un componente para manejar mejor los datos y la lógica.', unidad: 2, ruta: '/practica2' },
    { nombre: 'Componentes Compuestos', objetivo: 'Crear componentes compuestos', descripcion: 'Aprender a combinar múltiples componentes en uno solo para mejorar la modularidad y reutilización de código.', unidad: 2, ruta: '/practica3' },
    { nombre: 'Flujo de Control en Componentes - @if', objetivo: 'Control de flujo con la directiva @if', descripcion: 'Uso de la directiva *ngIf para mostrar u ocultar elementos dinámicamente según una condición.', unidad: 2, ruta: '/practica4' },
    { nombre: 'Flujo de Control en Componentes - @for', objetivo: 'Control de flujo con la directiva @for', descripcion: 'Uso de la directiva *ngFor para iterar sobre listas y generar dinámicamente elementos en la plantilla.', unidad: 2, ruta: '/practica5' },
    { nombre: 'Encuadernación de Propiedades en Angular', objetivo: 'Enlazar propiedades de componentes', descripcion: 'Explorar la vinculación de datos unidireccional y bidireccional mediante property binding y two-way data binding.', unidad: 2, ruta: '/practica6' },
    { nombre: 'Manejo de eventos', objetivo: 'Gestión de eventos en Angular', descripcion: 'Capturar eventos del usuario (clics, teclas, etc.) y manejarlos dentro de los componentes de Angular.', unidad: 2, ruta: '/practica7' },
    { nombre: 'Comunicación de Componentes con @Input', objetivo: 'Pasar datos entre componentes', descripcion: 'Uso de @Input para recibir datos de un componente padre y utilizarlos dentro del componente hijo.', unidad: 2, ruta: '/practica8' },
    { nombre: 'Comunicación de Componentes con @Output', objetivo: 'Enviar datos desde un componente hijo', descripcion: 'Uso de @Output y EventEmitter para enviar datos y eventos desde un componente hijo a su componente padre.', unidad: 2, ruta: '/practica9' },
    { nombre: 'Vistas Diferibles', objetivo: 'Uso de vistas diferibles', descripcion: 'Implementar estrategias para cargar contenido bajo demanda usando *ngIf, lazy loading y Change Detection.', unidad: 2, ruta: '/practica10' },
    { nombre: 'Optimización de imágenes', objetivo: 'Mejorar el rendimiento de las imágenes', descripcion: 'Implementar técnicas como carga diferida (lazy loading), formatos optimizados y el uso de CDNs para mejorar el rendimiento.', unidad: 2, ruta: '/practica11' },
    { nombre: 'Descripción general del Enrutamiento', objetivo: 'Aprender sobre el enrutamiento en Angular', descripcion: 'Configurar el Router de Angular para navegar entre diferentes vistas y manejar rutas dinámicas y anidadas.', unidad: 2, ruta: '/practica12' }
  ];

  practicaActual: any = null;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const url = this.router.url;
      this.practicaActual = this.practicas.find(p => p.ruta === url) || null;
    });
  }
}
