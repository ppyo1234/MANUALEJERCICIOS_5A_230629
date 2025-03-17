import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';

@Component({
  selector: 'app-tabla-basica',
  templateUrl: './tabla-basica.component.html',
  imports: [CommonModule], 
  styleUrls: ['./tabla-basica.component.css']
})
export class TablaBasicaComponent implements AfterViewInit {
  @ViewChild('dataTable', { static: false }) table!: ElementRef;

  readonly foods = [
    { name: 'Tacos al Pastor', region: 'Centro de México', mainIngredient: 'Carne de cerdo', price: '50 MXN' },
    { name: 'Tamales', region: 'Todo México', mainIngredient: 'Masa de maíz', price: '20 MXN' },
    { name: 'Pozole', region: 'Occidente de México', mainIngredient: 'Maíz cacahuazintle', price: '80 MXN' },
    { name: 'Chiles en Nogada', region: 'Puebla', mainIngredient: 'Chile poblano', price: '150 MXN' },
    { name: 'Mole Poblano', region: 'Puebla', mainIngredient: 'Chiles y chocolate', price: '120 MXN' },
    { name: 'Enchiladas', region: 'Todo México', mainIngredient: 'Tortilla de maíz', price: '70 MXN' },
    { name: 'Sopes', region: 'Centro de México', mainIngredient: 'Masa de maíz', price: '30 MXN' },
    { name: 'Quesadillas', region: 'Centro y Norte de México', mainIngredient: 'Tortilla de maíz o harina', price: '40 MXN' },
    { name: 'Cochinita Pibil', region: 'Yucatán', mainIngredient: 'Carne de cerdo', price: '90 MXN' },
    { name: 'Tlayudas', region: 'Oaxaca', mainIngredient: 'Tortilla grande de maíz', price: '100 MXN' },
    { name: 'Birria', region: 'Jalisco', mainIngredient: 'Carne de chivo', price: '130 MXN' },
    { name: 'Pambazo', region: 'Centro de México', mainIngredient: 'Pan relleno de papa y chorizo', price: '45 MXN' },
    { name: 'Gorditas', region: 'Todo México', mainIngredient: 'Masa de maíz con diferentes rellenos', price: '35 MXN' },
    { name: 'Cemita Poblana', region: 'Puebla', mainIngredient: 'Pan de ajonjolí con milanesa', price: '85 MXN' },
    { name: 'Tostadas', region: 'Todo México', mainIngredient: 'Tortilla frita con guisado', price: '40 MXN' },
    { name: 'Tlacoyos', region: 'Centro de México', mainIngredient: 'Masa de maíz rellena de frijol', price: '35 MXN' },
    { name: 'Caldo de Res', region: 'Todo México', mainIngredient: 'Carne de res y verduras', price: '90 MXN' },
    { name: 'Huauzontles', region: 'Centro de México', mainIngredient: 'Planta comestible capeada', price: '80 MXN' },
    { name: 'Mixiotes', region: 'Hidalgo', mainIngredient: 'Carne de carnero envuelta en penca', price: '110 MXN' },
    { name: 'Pescado a la Talla', region: 'Guerrero', mainIngredient: 'Pescado asado con adobo', price: '150 MXN' },
    { name: 'Menudo', region: 'Norte de México', mainIngredient: 'Panza de res en caldo rojo', price: '100 MXN' },
    { name: 'Carne Asada', region: 'Norte de México', mainIngredient: 'Carne de res asada', price: '200 MXN' },
    { name: 'Chapulines', region: 'Oaxaca', mainIngredient: 'Insectos tostados con limón y sal', price: '50 MXN' },
    { name: 'Capirotada', region: 'Todo México', mainIngredient: 'Pan dulce con miel y queso', price: '60 MXN' },
    { name: 'Tamales de Chipilín', region: 'Chiapas', mainIngredient: 'Masa de maíz con chipilín', price: '30 MXN' },
    { name: 'Empanadas de Camarón', region: 'Veracruz', mainIngredient: 'Masa frita rellena de camarón', price: '75 MXN' },
    { name: 'Chongos Zamoranos', region: 'Michoacán', mainIngredient: 'Leche cuajada con canela', price: '50 MXN' }
  ];
  

  ngAfterViewInit() {
    setTimeout(() => {
      if (!(($.fn as any).DataTable.isDataTable(this.table.nativeElement))) { 
        $(this.table.nativeElement).DataTable({
          paging: true,
          searching: true,
          ordering: true,
          lengthMenu: [5, 10, 15],
          scrollY: '300px',
          pageLength: 5,
          language: {
            search: "Buscar:",
            lengthMenu: "Mostrar _MENU_ registros por página",
            info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
            infoEmpty: "No hay registros disponibles",
            infoFiltered: "(filtrado de _MAX_ registros totales)",
            paginate: {
              first: "Primero",
              last: "Último",
              next: "Siguiente",
              previous: "Anterior"
            }
          }
        });
      }
    }, 100); 
  }
  
  
}
