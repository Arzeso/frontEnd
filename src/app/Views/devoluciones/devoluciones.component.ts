import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevolucionesService } from 'src/app/Service/Devoluciones/devoluciones.service';
import { NgForm } from '@angular/forms';
import { ngxCsv } from'ngx-csv';
import { Devoluciones } from 'src/app/Modelo/Devoluciones';


@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.css']
})
export class DevolucionesComponent implements OnInit {

  filtroDevo ='';

  devoluciones:Devoluciones[];

  devolucionesDetails = null as any;

  devolucionesToUpdate={
    id_devolucion:"",
    id_producto:"",
    id_venta:"",
    valor_devolucion:"",
    motivo:"",
    fecha:"",
    cantidad:"",
    id_sucursal:"",
    cactivacion:""
  }


  constructor(private service:DevolucionesService, private router:Router) { }

  ngOnInit() {
    this.getDevolucionesDetails();
  }

  generarReporte(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'REPORTE DE DEVOLUCIONES EN EXISTENCIAS',
      useBom: true,
      headers: ["Id devolución","Id producto", "Id venta", "Valor devolucion","Motivo", "Fecha", "Cantidad", "Id sucursal", "Activación"]
    };
   
    new ngxCsv(this.devolucionesDetails, "Reporte", options);
  }


  getDevolucionesDetails(){
    this.service.getDevoluciones().subscribe((resp)=>{
      console.log(resp);
      this.devolucionesDetails = resp;
    },
    (err) => {
      console.log(err);
    }
    );
  }
  
  registerDev(registerForm: NgForm) {
    console.log(registerForm.value);
    this.service.registerDevolucion(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getDevolucionesDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editDev(devolucion: any){
    this.devolucionesToUpdate = devolucion;
  }

  updateDevoluciones(id:string){
    this.service.updateDevolucion(this.devolucionesToUpdate, this.devolucionesToUpdate.id_devolucion).subscribe(
      (resp)=>{
       console.log(resp); 
      },
        (err)=>{
          console.log(err);
      }
    );
  }

  eliminarDevoluciones(id:string){
    this.service.deleteDevolucion(this.devolucionesToUpdate.id_devolucion).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}
