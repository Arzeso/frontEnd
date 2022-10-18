import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroProveedor'
})
export class FiltroProveedorPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultProvee=[]

    for(const provee of value){
      if(provee.telefono.toString().indexOf(arg.toString()) > -1 || provee.nombreProveedor.toUpperCase().indexOf(arg.toUpperCase()) > -1 || provee.direccion.toUpperCase().indexOf(arg.toUpperCase()) > -1){
        resultProvee.push(provee);
      };
    };
    return resultProvee;
  }

}
