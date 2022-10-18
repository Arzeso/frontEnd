import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import { Tienda } from 'src/app/Modelo/Tienda';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheethtml.sheet; charset=UTF-8';
const EXCEL_EXT = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class TiendasService {

  constructor(private http: HttpClient) { }

  Url = "http://localhost:8080/tienda/sucursal/"
  
  public getTiendas() {
    return this.http.get<Tienda[]>(this.Url + 'listar');
  }

  public deleteTiendas(valor: string) {
    return this.http.delete(this.Url + 'delete/' + valor);
  }

  public registerTienda(tiendaData: any){
    return this.http.post(this.Url + 'add/', tiendaData)
  }

  public updateTiendas(Tienda: any, valor: string) {
    return this.http.put(this.Url + 'actualizar/' + valor, Tienda);
  }
}
