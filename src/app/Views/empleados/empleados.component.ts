import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Modelo/Empleado';

import { Tienda } from 'src/app/Modelo/Tienda';
import { EmpleadosService } from 'src/app/Service/Empleados/empleados.service';
import { TiendasService } from 'src/app/Service/Tiendas/tiendas.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {


  filtroEmp='' ;

  empleados:Empleado[];
  
  tiendas:Tienda[];

  tiendasDetails = null as any;

  tiendasToUpdate = {
    id_sucursal:"",
    direccion:"",
    estado:"",
    clvSuc:""
  }

  empleadosDetails = null as any;

  empleadosToUpdate = {
    id_empleado:"",
    nombre:"",
    ape_p:"",
    ape_m:"",
    telefono:"",
    puesto:"",
    id_sucursal:"",
    clvUsuario:"",
    password_user:"",
    cactivacion:""
  }

  


  constructor(private service:EmpleadosService, private router:Router, private service2:TiendasService) { }

  ngOnInit() {
    this.getEmpleadosDetails();
    this.getStoresDetails();
  }



  addEmpleado(addForm: NgForm) {
    this.service.registerEmpleado(addForm.value).subscribe(
      (resp) => {
        console.log(resp);
        addForm.reset();
        this.getEmpleadosDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }



  edit(empleado: any){
    this.empleadosToUpdate = empleado;
  }

  getEmpleadosDetails(){
    this.service.getEmpleados().subscribe((resp)=>{
      console.log(resp);
      this.empleadosDetails = resp;
    },
    (err) => {
      console.log(err);
    }
    );
  }


  updateEmpleado(id:string){
    this.service.updateEmpleados(this.empleadosToUpdate, id).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  eliminarEmpleado(id:string){
    this.service.deleteEmpleados(id).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }







  getStoresDetails(){
    this.service2.getTiendas().subscribe((resp)=>{
      console.log(resp);
      this.tiendasDetails = resp;
    },
    (err) => {
      console.log(err);
    }
    );
  }




}
