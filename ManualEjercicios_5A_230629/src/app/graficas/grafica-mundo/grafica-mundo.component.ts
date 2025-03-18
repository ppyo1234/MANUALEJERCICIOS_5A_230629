import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Globe from 'globe.gl';

@Component({
  selector: 'app-grafica-mundo',
  templateUrl: './grafica-mundo.component.html',
  styleUrls: ['./grafica-mundo.component.css']
})
export class GraficaMundoComponent implements AfterViewInit {
  @ViewChild('globeContainer', { static: false }) globeContainer!: ElementRef;

  ngAfterViewInit() {
    const globeInstance = new Globe(this.globeContainer.nativeElement);
    
    globeInstance
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png');
  }
}
