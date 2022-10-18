import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from 'src/app/Modelo/Categoria';
import { Producto } from 'src/app/Modelo/Producto';
import { Proveedor } from 'src/app/Modelo/Proveedor';
import { Tienda } from 'src/app/Modelo/Tienda';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  Url = "http://localhost:8080/tienda/producto/"

  public getProductos(){
    return this.http.get<Producto[]>(this.Url + 'listar');
  }

  public registerProducto(empleadoData: any) {
    return this.http.post(this.Url + 'add/', empleadoData);
  }

  public updateProducto(producto: any, valor:string){
    return this.http.put(this.Url + 'actualizar/' + valor, producto);
  }

  public deleteProductos(id:string){
    return this.http.delete(this.Url + 'delete/' + id);
  }

  public getProductoID(idproducto:string){
    return this.http.get<Producto>(this.Url + 'buscar/idProdu/'+ idproducto);
  }


  API="http://localhost:8080/tienda/CategoriaProduc/"
  public getCategorias(){
    return this.http.get<Categoria[]>(this.API + 'listar');
  }


  Url2 = "http://localhost:8080/tienda/sucursal/"
  public getTiendas(){
    return this.http.get<Tienda[]>(this.Url2 + 'listar');
  }


  Url3 = "http://localhost:8080/tienda/proveedor/"

  public getProveedores(){
    return this.http.get<Proveedor[]>(this.Url3 + 'listar');
  }
}
