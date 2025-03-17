import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComidaMexicanaService {

  getComidas() {
    return [
      { nombre: 'Tacos', tipo: 'Carnes', origen: 'Todo México' },
      { nombre: 'Enchiladas', tipo: 'Pollo', origen: 'Todo México' },
      { nombre: 'Tamales', tipo: 'Cerdo', origen: 'Todo México' },
      { nombre: 'Quesadillas', tipo: 'Queso', origen: 'Todo México' },
      { nombre: 'Chiles en Nogada', tipo: 'Pechuga de Pollo', origen: 'Puebla' },
      { nombre: 'Sopes', tipo: 'Frijoles', origen: 'Todo México' },
      { nombre: 'Guacamole', tipo: 'Aguacate', origen: 'Todo México' },
      { nombre: 'Ceviche', tipo: 'Mariscos', origen: 'Costas' },
      { nombre: 'Tostadas', tipo: 'Pescado', origen: 'Todo México' },
      { nombre: 'Mole Poblano', tipo: 'Pollo', origen: 'Puebla' },
      { nombre: 'Pozole', tipo: 'Cerdo', origen: 'Todo México' },
      { nombre: 'Carnitas', tipo: 'Cerdo', origen: 'Michoacán' },
      { nombre: 'Tacos al Pastor', tipo: 'Cerdo', origen: 'CDMX' },
      { nombre: 'Elote', tipo: 'Maíz', origen: 'Todo México' },
      { nombre: 'Cochinita Pibil', tipo: 'Cerdo', origen: 'Yucatán' },
      { nombre: 'Tacos de Carnitas', tipo: 'Cerdo', origen: 'Todo México' },
      { nombre: 'Tacos de Suadero', tipo: 'Carne de Res', origen: 'CDMX' },
      { nombre: 'Mole Verde', tipo: 'Pollo', origen: 'Oaxaca' },
      { nombre: 'Arroz Rojo', tipo: 'Acompañamiento', origen: 'Todo México' },
      { nombre: 'Chilaquiles', tipo: 'Pollo', origen: 'Todo México' },
      { nombre: 'Tamal de Elote', tipo: 'Maíz', origen: 'Todo México' },
      { nombre: 'Tortas de Chorizo', tipo: 'Chorizo', origen: 'Todo México' },
      { nombre: 'Pambazo', tipo: 'Papa y Chorizo', origen: 'CDMX' },
      { nombre: 'Frijoles de la Olla', tipo: 'Frijoles', origen: 'Todo México' },
      { nombre: 'Caldo de Res', tipo: 'Res', origen: 'Todo México' },
      { nombre: 'Tacos de Pescado', tipo: 'Pescado', origen: 'Baja California' },
      { nombre: 'Sopa de Lima', tipo: 'Pollo', origen: 'Yucatán' },
    ];
  }
}
