import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-grafica-ajax',
  templateUrl: './grafica-ajax.component.html',
  styleUrls: ['./grafica-ajax.component.css']
})
export class GraficaAjaxComponent implements OnInit {
  chart: any;  // Variable para almacenar la instancia del gráfico

  constructor() {}

  ngOnInit(): void {
    this.getSessions();  // Llamamos a la API cuando el componente se inicie
  }

  // Función para obtener los datos de la API
  getSessions() {
    fetch('http://localhost:3000/allSessions')
      .then((response) => response.json())
      .then((data) => {
        const sessions = data.sessions;  // Aquí obtenemos las sesiones
        this.createChart(sessions);  // Creamos el gráfico con los datos
      })
      .catch((error) => {
        console.error('Error obteniendo las sesiones:', error);
      });
  }

  // Función para crear el gráfico con los datos obtenidos
  createChart(sessions: any[]) {
    const sessionStatus = sessions.reduce((acc: any, session: any) => {
      if (!acc[session.status]) {
        acc[session.status] = 1;
      } else {
        acc[session.status]++;
      }
      return acc;
    }, {});

    const statuses = Object.keys(sessionStatus);
    const counts = Object.values(sessionStatus);

    // Crear el gráfico con Chart.js
    this.chart = new Chart('canvas', {
      type: 'bar',  // Tipo de gráfico (puede ser 'bar', 'line', etc.)
      data: {
        labels: statuses,  // Etiquetas de la gráfica
        datasets: [
          {
            label: 'Número de sesiones por estado',
            data: counts,  // Datos a graficar
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
