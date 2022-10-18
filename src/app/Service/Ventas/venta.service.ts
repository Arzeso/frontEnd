import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Venta } from 'src/app/Modelo/Venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8080/tienda/ventas/'

  public getVentas() {
    return this.http.get<Venta[]>(this.API + 'listar');
  }

  public getlistfiltrada(fecha1:string, fecha2:string) { 
    return this.http.get<Venta[]>(this.API + 'buscar/fechas/'+fecha1 + '/' + fecha2); 
  }
}
