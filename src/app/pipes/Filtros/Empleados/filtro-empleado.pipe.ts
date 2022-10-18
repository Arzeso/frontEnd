import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroEmpleado'
})
export class FiltroEmpleadoPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    const resultEmp =[];
    for(const empleado of value){
      if(empleado.telefono.toString().indexOf(arg.toString()) > -1 || empleado.clvUsuario.toUpperCase().indexOf(arg.toUpperCase()) > -1 || empleado.nombre.toUpperCase().indexOf(arg.toUpperCase()) > -1 || empleado.ape_p.toUpperCase().indexOf(arg.toUpperCase()) > -1 || empleado.ape_m.toUpperCase().indexOf(arg.toUpperCase()) > -1 ){
          resultEmp.push(empleado);
      }
    };

    return resultEmp;
  }

}
