import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Membresia } from 'src/app/Modelo/Membresia';

@Injectable({
  providedIn: 'root'
})
export class MembresiaService {

  constructor(private http: HttpClient) { }

  Url = "http://localhost:8080/membresias/"

  public getMembresia(){
    return this.http.get<Membresia[]>(this.Url + 'listar');
  }


  public registerMembresia(membresiaData: any) {
    return this.http.post(this.Url + 'add/', membresiaData);
  }

  public updateMembresias(Membresia: any, clave:string){
    return this.http.put(this.Url + 'actualizar/'+clave, Membresia);
  }


  public deleteMembresias(clave:string){
    return this.http.delete(this.Url + 'delete/'+clave);
  }
}
