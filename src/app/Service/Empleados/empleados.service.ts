import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from 'src/app/Modelo/Empleado';
import { Tienda } from 'src/app/Modelo/Tienda';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) { }

  Url = "http://localhost:8080/tienda/Empleados/"

  public getEmpleados(){
    return this.http.get<Empleado[]>(this.Url + 'listar');
  }

  public registerEmpleado(empleadoData: any) {
    return this.http.post(this.Url + 'add/', empleadoData);
  }

  public updateEmpleados(Empleado: any, valor:string){
    return this.http.put(this.Url + 'actualizar/'+valor, Empleado);
  }


  public deleteEmpleados(clave:string){
    return this.http.delete(this.Url + 'delete/' + clave);
  }

  Url2 = "http://localhost:8080/tienda/sucursal/"
  public getTiendas(){
    return this.http.get<Tienda[]>(this.Url2 + 'listar');
  }
}
