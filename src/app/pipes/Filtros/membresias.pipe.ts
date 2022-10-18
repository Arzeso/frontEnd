import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'membresias'
})
export class MembresiasPipe implements PipeTransform {

 
  transform(value: any, arg: any): any {
    
    const resultMembre =[];
    for(const membresia of value){
      if(membresia.fecha_exp.toUpperCase().toString().indexOf(arg.toUpperCase().toString()) > -1  || membresia.nombre_completo.toUpperCase().indexOf(arg.toUpperCase()) > -1  || membresia.telefono.toString().indexOf(arg.toString()) > -1 || membresia.claveMembresia.toUpperCase().toString().indexOf(arg.toUpperCase().toString()) > -1 ){
          resultMembre.push(membresia);
      }
    };

    return resultMembre;
  }


}
