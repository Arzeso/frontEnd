import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Devoluciones } from 'src/app/Modelo/Devoluciones';

@Injectable({
  providedIn: 'root'
})
export class DevolucionesService {

  constructor(private http: HttpClient) { }
  Url = "http://localhost:8080/tienda/Devoluciones/"

  public getDevoluciones(){
    return this.http.get<Devoluciones[]>(this.Url + 'listar');
  }

  public registerDevolucion(devolucionesData: any){
    return this.http.post(this.Url + 'add/', devolucionesData);
  }

  public updateDevolucion(Devoluciones: any, valor:string){
    return this.http.put(this.Url + 'actualizar/' + valor, Devoluciones);
  }

  public deleteDevolucion(valor:string){
    return this.http.delete(this.Url + 'delete/' + valor);
  }
}
