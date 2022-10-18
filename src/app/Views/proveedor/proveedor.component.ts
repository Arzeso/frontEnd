import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/Modelo/Proveedor';
import { ProveedorService } from 'src/app/Service/Proveedor/proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {


  proveedores:Proveedor[];

  proveedoresDetails = null as any;

  proveedoresToUpdate = {
    id_proveedor:"",
    nombreProveedor:"",
    direccion:"",
    telefono:"",
    cactivacion:""
  }


  constructor(private service:ProveedorService, private router:Router) { }

  filtroProvee='';
  
  ngOnInit() {
    this.getProveedoresDetails();
  }


  edit(proveedor: any){
    this.proveedoresToUpdate = proveedor;
  }

  getProveedoresDetails(){
    this.service.getProveedores().subscribe((resp)=>{
      console.log(resp);
      this.proveedoresDetails = resp;
    },
    (err) => {
      console.log(err);
    }
    );
  }


  addProveedor(addProvee: NgForm) {
    console.log(addProvee.value);
    this.service.registerProveedor(addProvee.value).subscribe(
      (resp) => {
        console.log(resp);
        addProvee.reset();
        this.getProveedoresDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }



  updateProveedor(id:string){
    console.log(this.proveedoresToUpdate.id_proveedor);
    console.log(this.proveedoresToUpdate);
    this.service.updateProveedores(this.proveedoresToUpdate, this.proveedoresToUpdate.id_proveedor).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  eliminarProveedor(clave:string){
    this.service.deleteProveedores(clave).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }


}
