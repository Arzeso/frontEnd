import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tienda'
})
export class TiendaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for(const tienda of value){
      if(tienda.clvSuc.toUpperCase().indexOf(arg.toUpperCase()) > -1 || tienda.estado.toUpperCase().indexOf(arg.toUpperCase()) > -1 || tienda.direccion.toUpperCase().indexOf(arg.toUpperCase()) > -1){
        resultPost.push(tienda);
      };
    };

    return resultPost;
    
}

}
