import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Membresia } from 'src/app/Modelo/Membresia';
import { MembresiaService } from 'src/app/Service/Membresias/membresia.service';


@Component({
  selector: 'app-membresias',
  templateUrl: './membresias.component.html',
  styleUrls: ['./membresias.component.css']
})
export class MembresiasComponent implements OnInit {
  
  filtroMembre='';

  membresias:Membresia[];

  inputParam: string;

  fecha:Date;

  membresiasDetails = null as any;

  membresiasToUpdate = {
    id_membresia:"",
    nombre_completo:"",
    telefono:"",
    edad:"",
    fecha_exp: "",
    tarjeta_c:"",
    claveMembresia:"",
    cactivacion:"",
  }

  constructor(private service:MembresiaService, private router: Router) { }

  ngOnInit() {
   // this.service.getMembresia().subscribe(data=>{this.membresias=data});
   
   this.getMembresiasDetails();
    
   let fecha1 = new Date('2022/10/10');
   let fecha2 = new Date()

   let resta = fecha2.getTime() - fecha1.getTime()
   console.log(Math.round(resta/ (1000*60*60*24)))
  
  }

  //Membresias Acciones


  edit(proveedor: any){
    this.membresiasToUpdate = proveedor;
  }

  getMembresiasDetails(){
    this.service.getMembresia().subscribe((resp)=>{
      console.log(resp);
      this.membresiasDetails = resp;
      console.log(this.membresiasDetails);
    },
    (err) => {
      console.log(err);
    }
    );

    
  }



  addMembresia(addMembre: NgForm) {
    console.log(addMembre.value);
    this.service.registerMembresia(addMembre.value).subscribe(
      (resp) => {
        console.log(resp);
        addMembre.reset();
        this.getMembresiasDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }


  updateMembresia(clave:string){
    this.service.updateMembresias(this.membresiasToUpdate,  this.membresiasToUpdate.claveMembresia).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  eliminarMembresia(clave:string){
    this.service.deleteMembresias(this.membresiasToUpdate.claveMembresia).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  


}
