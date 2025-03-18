import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-grafica-basica',
  templateUrl: './grafica-basica.component.html',
  styleUrls: ['./grafica-basica.component.css']
})
export class GraficaBasicaComponent implements AfterViewInit {
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef;

  readonly foods = [
    { name: 'Tacos al Pastor', price: '50 MXN' },
    { name: 'Tamales', price: '20 MXN' },
    { name: 'Pozole', price: '80 MXN' },
    { name: 'Chiles en Nogada', price: '150 MXN' },
    { name: 'Mole Poblano', price: '120 MXN' },
    { name: 'Enchiladas', price: '70 MXN' },
    { name: 'Sopes', price: '30 MXN' },
    { name: 'Quesadillas', price: '40 MXN' },
    { name: 'Cochinita Pibil', price: '90 MXN' },
    { name: 'Tlayudas', price: '100 MXN' },
  ];

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
    const labels = this.foods.map(food => food.name);
    const prices = this.foods.map(food => parseInt(food.price.replace(' MXN', ''), 10));

    new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Precios de Comida (MXN)',
          data: prices,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
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
