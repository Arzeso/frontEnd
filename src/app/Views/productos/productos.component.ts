import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { ProductosService } from 'src/app/Service/Productos/productos.service';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/Service/Categorias/categorias.service';
import { TiendasService } from 'src/app/Service/Tiendas/tiendas.service';
import { ProveedorService } from 'src/app/Service/Proveedor/proveedor.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Producto[];

  filtroProdu='' ;

  productosDetails = null as any;

  categoriasDetails = null as any;

  tiendasDetails = null as any;

  proveedoresDetails = null as any;

  proveedoresToUpdate = {
    id_proveedor:"",
    nombreProveedor:"",
    direccion:"",
    telefono:"",
    cactivacion:""
  }

  tiendasToUpdate = {
    id_sucursal:"",
    direccion:"",
    estado:"",
    clvSuc:""
  }

  productosToUpdate = {
    id_Producto:"",
    idCategoria:"",
    contenido:"",
    idSucursal:"",
    tipoUnidad:"",
    idProveedor:"",
    precioProveedor:"",
    precioMenudeo:"",
    precioMayoreo:"",
    fcaducidad:"",
    existencia:"",
    nombre:"",
    cactivacion:"",
    status:"",
  }

  categoriasToUpdate={
    id_categoria:"",
    categoria:"",
    cactivacion:""
  }

  constructor(private service:ProductosService, private router:Router, private service2:CategoriasService, private service3:TiendasService, private service4:ProveedorService) { }

  ngOnInit(): void {
    this.getProductosDetails();
    this.getCategoriasDetails();
    this.getStoresDetails();
    this.getProveedoresDetails();
  }

  edit(productos: any){
    this.productosToUpdate = productos;
  }


  getProductosDetails(){
    this.service.getProductos().subscribe((resp)=>{
      console.log(resp);
      this.productosDetails = resp;
    },
    (err) => {
      console.log(err);
    }
    );
  }


  addProductos(addProducto: NgForm) {
    this.service.registerProducto(addProducto.value).subscribe(
      (resp) => {
        console.log(resp);
        addProducto.reset();
        this.getProveedoresDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }




  updateProducto(id:string){
    this.service.updateProducto(this.productosToUpdate, id).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  eliminarProducto(id:string){
    this.service.deleteProductos(id).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }























  getCategoriasDetails(){
    this.service2.getCategorias().subscribe((resp)=>{
      console.log(resp);
      this.categoriasDetails = resp;
    },
    (err) => {
      console.log(err);
    }
    );
  }

  getStoresDetails(){
    this.service3.getTiendas().subscribe((resp)=>{
      console.log(resp);
      this.tiendasDetails = resp;
    },
    (err) => {
      console.log(err);
    }
    );
  }


  getProveedoresDetails(){
    this.service4.getProveedores().subscribe((resp)=>{
      console.log(resp);
      this.proveedoresDetails = resp;
    },
    (err) => {
      console.log(err);
    }
    );
  }

}
