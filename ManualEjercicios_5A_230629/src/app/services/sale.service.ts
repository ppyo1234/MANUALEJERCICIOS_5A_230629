import { Injectable } from '@angular/core';
import axios from 'axios';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private apiUrl='http://localhost:5000/api/sales';
  private socket=io('http://localhost:5000');

  constructor() { }

  // Obtener todos los datos 
  async getSales(){
    try{
      const response =await axios.get(this.apiUrl);
      return response.data;
    } catch (error){
      console.error('Error obtenido de ventas ', error);
      throw error;
    }
  }

  //Crear una nueva venta 
  async createSale(product: String,amount:number){
    try{
      const response =await axios.post(this.apiUrl, {product,amount});
      return response.data;
    }catch(error){
      console.error('Error creando venta ',error);
      throw error;
    }
  }

  onNewSale():Observable<any>{
    return new Observable(observer =>{
      this.socket.on('new-sale',sale=>{
        observer.next(sale);
      });
      return ()=> this.socket.disconnect();

    });
  }
}
