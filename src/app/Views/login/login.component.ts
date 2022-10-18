import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/Modelo/Empleado';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  empleado  : Empleado = new Empleado;
  constructor() { }

  ngOnInit(){
  }

  loginEmpleado(){

  }

}
