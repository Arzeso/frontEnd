import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorias'
})
export class CategoriasPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const categ = [];
    for(const categoria of value){
      if(categoria.categoria.toUpperCase().indexOf(arg.toUpperCase()) > -1){
        categ.push(categoria);
      };
    };
    return categ;
  }

}
