import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from 'src/app/Modelo/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http:HttpClient) { }

  API="http://localhost:8080/tienda/CategoriaProduc/"

  public getCategorias(){
    return this.http.get<Categoria[]>(this.API + 'listar');
  }

  public deleteCategorias(valor:string){
    return this.http.delete(this.API + 'delete/' + valor)
  }

  public registerCategoria(categoriaData: any){
    return this.http.post(this.API + 'add/', categoriaData);
  }

  public updateCategoria(Categoria: any, valor:string){
    return this.http.put(this.API + 'actualizar/' + valor, Categoria);
  }

}
