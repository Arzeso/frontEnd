import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrodev'
})
export class FiltrodevPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultDev = [];
    for(const devolucion of value){
      if(devolucion.id_devolucion.toString().indexOf(arg.toString()) > -1 || devolucion.motivo.toUpperCase().indexOf(arg.toUpperCase()) > -1
      || devolucion.fecha.toUpperCase().indexOf(arg.toUpperCase()) > -1 ){
        resultDev.push(devolucion);
    };
  };
  return resultDev;
  }

}
