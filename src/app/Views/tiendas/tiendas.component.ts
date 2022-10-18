import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//ANTES DE IMPORTAR CSV EXCEL, PONER ESTE COMANDO 
//npm install ngx-csv
import { ngxCsv } from 'ngx-csv';
//-------------------------------------------------------------------
import { Tienda } from 'src/app/Modelo/Tienda';
import { TiendasService } from 'src/app/Service/Tiendas/tiendas.service';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {

  filtroSuc='';
  tiendas:Tienda[];
  tiendasDetails = null as any;
  pageSize = 5;
  desde:number = 0;
  hasta:number = 5;

  tiendasToUpdate={
    id_sucursal:"",
    direccion:"",
    estado:"",
    clvSuc:"",
    cactivacion:""
  };
  constructor(private service:TiendasService, private router:Router) { }

  ngOnInit(): void {
    this.getStoresDetails();
  }

  generarReporte(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'REPORTE DE TIENDAS EN EXISTENCIAS',
      useBom: true,
      headers: ["Id tienda", "Dirección", "Estado", "Clave Sucursal", "Clave de Activación"]
    };
   
    new ngxCsv(this.tiendasDetails, "Reporte de tiendas", options);
  }

  register(registerForm: NgForm){
    this.service.registerTienda(registerForm.value).subscribe(
      (resp) =>{
        console.log(resp);
        registerForm.reset();
        this.getStoresDetails();
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  getStoresDetails(){
    this.service.getTiendas().subscribe((resp)=>
    {
      console.log(resp);
      this.tiendasDetails = resp;
    },
    (err)=>{
      console.log(err);
    }
    );
  }

  edit(tienda: any){
    this.tiendasToUpdate = tienda;
  }


  eliminarTienda(id:string){
    this.service.deleteTiendas(id).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  updateTienda(id:string){
    this.service.updateTiendas(this.tiendasToUpdate, id).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
