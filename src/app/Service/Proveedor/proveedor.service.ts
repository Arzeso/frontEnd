import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from 'src/app/Modelo/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }


  Url = "http://localhost:8080/tienda/proveedor/"

  public getProveedores(){
    return this.http.get<Proveedor[]>(this.Url + 'listar');
  }

  public registerProveedor(proveedorData: any) {
    return this.http.post(this.Url + 'add/', proveedorData);
  }

  public updateProveedores(Proveedor: any, valor:string){
    return this.http.put(this.Url + 'actualizar/'+valor, Proveedor);
  }

  public deleteProveedores(clave:string){
    return this.http.delete(this.Url + 'delete/' + clave);
  }
}
