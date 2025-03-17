import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'datatables.net'; // Importa DataTables

declare var $: any; // Si usas jQuery

@Component({
  selector: 'app-tabla-ajax',
  templateUrl: './tabla-ajax.component.html',
  styleUrls: ['./tabla-ajax.component.css']
})
export class TablaAjaxComponent implements OnInit {
  datos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/allSessions').subscribe(
      (response: any) => {
        console.log('Respuesta de la API:', response); // Verifica si llega correctamente
        this.datos = response.sessions.map((session: any) => ({
          idSession: session.sessionId,
          email: session.email,
          nickname: session.nickname,
          ipServidor: session.serverData.ip,
          macServidor: session.serverData.macAddress,
          estado: session.status
        }));
        this.inicializarTabla();
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  inicializarTabla() {
    setTimeout(() => {
      $('.table').DataTable({
        data: this.datos,
        columns: [
          { title: 'ID Session', data: 'idSession' },
          { title: 'Email', data: 'email' },
          { title: 'Nickname', data: 'nickname' },
          { title: 'IP del Servidor', data: 'ipServidor' },
          { title: 'MAC del Servidor', data: 'macServidor' },
          { title: 'Estado', data: 'estado' }
        ]
      });
    }, 500);
  }
}
