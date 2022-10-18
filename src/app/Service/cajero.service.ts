import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../Modelo/Producto';
import { Cajero } from '../Modelo/Cajero';

@Injectable({
  providedIn: 'root'
})
export class CajeroService {

  constructor(private http: HttpClient) { }

  Url = "http://localhost:8080/tienda/producto/"

  public getProductos(){
    return this.http.get<Producto[]>(this.Url + 'buscar/all');
  }

  public getProductoID(idproducto:string){
    return this.http.get<Producto>(this.Url + 'buscar/idProdu/'+ idproducto);
  }



  API = 'http://localhost:8080/tienda/ventas/'

  public registerVenta(ventaData: any) {
    return this.http.post(this.API + 'add/', ventaData);
  }

}
