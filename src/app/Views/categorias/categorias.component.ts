import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/Service/Categorias/categorias.service';
import { Categoria } from 'src/app/Modelo/Categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  filtroCategoria='';
  categorias:Categoria[];

  categoriasDetails = null as any;

  categoriaToUpdate={
    id_categoria:"",
    categoria:"",
    cactivacion:""
  }
  constructor(private service:CategoriasService, private router:Router) { }

  ngOnInit(){
    this.getCategoriaDetails();
  }

  registerCategoria(registerForm:NgForm){
    this.service.registerCategoria(registerForm.value).subscribe(
      (resp)=>{
        console.log(resp);
        registerForm.reset();
        this.getCategoriaDetails();
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  getCategoriaDetails(){
    this.service.getCategorias().subscribe((res)=>{
      console.log(res);
      this.categoriasDetails = res;
    },
    (err) => {
      console.log(err);
    });
  }

  edit(categoria: any){
    this.categoriaToUpdate = categoria;
  }

  eliminarCategoria(id:string){
    this.service.deleteCategorias(id).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  updateCategoria(id:string){
    this.service.updateCategoria(this.categoriaToUpdate, id).subscribe
    ((resp)=>{
      console.log(resp);
    },
    (err)=>{
      console.log(err);
    }
    );
  }

}
