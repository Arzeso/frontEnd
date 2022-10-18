import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroProducto'
})
export class FiltroProductoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    
    const resultProdu =[];
    for(const producto of value){
      try {
        if(producto.nombre.toUpperCase().indexOf(arg.toUpperCase()) > -1 || producto.contenido.toUpperCase().indexOf(arg.toUpperCase())>-1 || producto.tipoUnidad.toUpperCase().indexOf(arg.toUpperCase())>-1 ){
          resultProdu.push(producto);
      }
      } catch (error) {
        
      }
      
    };

    return resultProdu;
  }

}
