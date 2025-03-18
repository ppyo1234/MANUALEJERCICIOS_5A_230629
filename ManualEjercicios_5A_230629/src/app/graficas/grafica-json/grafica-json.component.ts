import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grafica-json',
  templateUrl: './grafica-json.component.html',
  styleUrls: ['./grafica-json.component.css']
})
export class GraficaJsonComponent implements OnInit {
  chart: any;
  ngOnInit() {
    // Datos sobre cantantes de corridos tumbados
    const cantantes = [
      { "name": "Natanael Cano", "reproducciones": 5000000 },
      { "name": "Ovi", "reproducciones": 3000000 },
      { "name": "Junior H", "reproducciones": 4500000 },
      { "name": "Fuerza Regida", "reproducciones": 4000000 },
      { "name": "El Komander", "reproducciones": 3500000 },
      { "name": "Alfredo Olivas", "reproducciones": 2500000 }
    ];
  
    // Extraer los nombres de los cantantes y sus reproducciones
    const labels = cantantes.map(cantante => cantante.name);
    const data = cantantes.map(cantante => cantante.reproducciones);
  
    // Crear el gráfico de barras
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: labels, // Etiquetas: nombres de los cantantes
        datasets: [{
          label: 'Reproducciones (en millones)',
          data: data, // Datos: cantidad de reproducciones
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)', // Color más vibrante
            'rgba(54, 162, 235, 0.8)', 
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)', 
            'rgba(54, 162, 235, 1)', 
            'rgba(255, 206, 86, 1)', 
            'rgba(75, 192, 192, 1)', 
            'rgba(153, 102, 255, 1)', 
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 3, // Aumentamos el grosor del borde
          hoverBackgroundColor: 'rgba(0, 0, 0, 0.2)', // Color de hover más oscuro
          hoverBorderColor: 'rgba(0, 0, 0, 1)', // Color del borde cuando pasa el mouse
          borderRadius: 8, // Bordes redondeados
        }]
      },
      options: {
        responsive: true, // Para hacerlo responsivo
        maintainAspectRatio: true, // Mantenemos las proporciones del gráfico
        animation: {
          duration: 1000, // Animación más lenta
          easing: 'easeOutBounce', // Efecto de animación
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                family: 'Arial, sans-serif', // Fuente moderna
                size: 14, // Tamaño de fuente
                weight: 'bold' // Negrita
              },
              callback: function(value) {
                if (typeof value === 'number') {
                  return (value / 1000000).toFixed(1) + 'M'; // Formateamos el número y añadimos 'M'
                }
                return value;
              }
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)', // Líneas de la cuadrícula más suaves
            }
          },
          x: {
            ticks: {
              font: {
                family: 'Arial, sans-serif', // Fuente moderna
                size: 14,
                weight: 'bold'
              }
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)', // Líneas de la cuadrícula más suaves
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              font: {
                family: 'Arial, sans-serif',
                size: 14,
                weight: 'bold'
              }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fondo oscuro en tooltips
            titleFont: {
              family: 'Arial, sans-serif',
              size: 16,
              weight: 'bold'
            },
            bodyFont: {
              family: 'Arial, sans-serif',
              size: 14
            }
          }
        }
      }
    });
  }
  
    
}
