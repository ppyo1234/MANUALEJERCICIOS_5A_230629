import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // Para matInput si lo necesitas

interface RecordGuinness {
  nombre: string;
  persona: string;
  record: string;
  fecha: string;
  valor: string;
}

@Component({
  selector: 'app-tabla-opciones',
  templateUrl: './tabla-opciones.component.html',
  styleUrls: ['./tabla-opciones.component.css'],
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,  // Si estás usando matInput también
    // otros módulos
  ],
})
export class TablaOpcionesComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombre', 'persona', 'record', 'fecha', 'valor'];
  dataSource = new MatTableDataSource<RecordGuinness>([
    { nombre: 'Buceo más largo', persona: 'Ahmed Gabr', record: 'Mayor profundidad de buceo', fecha: '2014-09-18', valor: '332.35 m' },
    { nombre: 'Hombre más alto', persona: 'Sultan Kösen', record: 'Persona viva más alta', fecha: '2009-02-08', valor: '251 cm' },
    { nombre: 'Uñas más largas', persona: 'Lee Redmond', record: 'Las uñas más largas en una mujer', fecha: '2008-02-08', valor: '8.65 m' },
    { nombre: 'Maratón de videojuegos', persona: 'Okan Kaya', record: 'Maratón más largo jugando videojuegos', fecha: '2012-11-19', valor: '135 horas' },
    { nombre: 'Salto más alto', persona: 'Javier Sotomayor', record: 'Mayor salto de altura en atletismo', fecha: '1993-07-27', valor: '2.45 m' },
    { nombre: 'Mayor número de saltos en un minuto', persona: 'Kamal Kaan', record: 'Salto con cuerda en un minuto', fecha: '2021-06-01', valor: '312 saltos' },
    { nombre: 'Mujer con la cintura más estrecha', persona: 'Cathie Jung', record: 'Cintura más pequeña en una mujer', fecha: '2002-08-30', valor: '38.1 cm' },
    { nombre: 'Mayor cantidad de palabras escritas en 1 minuto', persona: 'Barbara Blackburn', record: 'Máxima velocidad de escritura', fecha: '2005-04-15', valor: '212 palabras' },
    { nombre: 'El hombre más rápido del mundo', persona: 'Usain Bolt', record: 'Récord mundial de los 100 metros', fecha: '2009-08-16', valor: '9.58 s' },
    { nombre: 'Mayor cantidad de selfies tomadas en una hora', persona: 'Yusuke Ueno', record: 'Selfies más rápidos', fecha: '2016-03-12', valor: '1,008 selfies' },
    { nombre: 'Mayor colección de muñecos Funko Pop', persona: 'Michael Johnson', record: 'Más muñecos Funko Pop', fecha: '2019-11-22', valor: '9,361' },
    { nombre: 'Mayor número de mariposas flotantes en un minuto', persona: 'Michael Phelps', record: 'Número de mariposas en natación', fecha: '2008-08-12', valor: '12 mariposas' },
    { nombre: 'Más tiempo invertido en dar una vuelta en montaña rusa', persona: 'John Smith', record: 'Más largo viaje en montaña rusa', fecha: '2015-07-09', valor: '24 horas' },
    { nombre: 'Persona más longeva', persona: 'Kane Tanaka', record: 'Persona más longeva registrada', fecha: '2020-04-09', valor: '118 años' },
    { nombre: 'Más personas dentro de un auto pequeño', persona: 'Yasmin Punzón', record: 'Cantidad máxima de personas en un vehículo', fecha: '2022-02-17', valor: '100 personas' },
    { nombre: 'Más selfies tomadas en una hora en grupo', persona: 'Tom Hanks', record: 'Selfies grupales más rápidos', fecha: '2020-11-05', valor: '400 selfies' },
    { nombre: 'Mayor distancia recorrida en monopatín', persona: 'Rodrigo Díaz', record: 'Recorrido más largo en monopatín', fecha: '2018-06-13', valor: '200 km' },
    { nombre: 'Mayor cantidad de perritos en una competencia', persona: 'Alicia González', record: 'Mayor cantidad de perros participantes', fecha: '2021-01-25', valor: '500 perros' },
    { nombre: 'Mayor duración de una ducha fría', persona: 'Carlos López', record: 'Tiempo máximo bajo agua fría', fecha: '2019-12-21', valor: '3 horas' },
    { nombre: 'Mayor cantidad de saltos en paracaídas en un día', persona: 'Walter Anderson', record: 'Saltos más rápidos en paracaídas', fecha: '2017-09-04', valor: '42 saltos' },
  
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    // Asegúrate de que los elementos estén completamente cargados antes de asignarlos
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
