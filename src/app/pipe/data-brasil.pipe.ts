import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBrasil'
})
export class DataBrasilPipe implements PipeTransform {
  
  transform(value: string | Date | number): string {
    if (!value) return '';

    
    let data: Date;
    
    if (value instanceof Date) {
      data = value;
    } else if (typeof value === 'string') {
      
      data = new Date(value.replace(/-/g, '/'));
    } else if (typeof value === 'number') {
      data = new Date(value);
    } else {
      return 'Data inválida';
    }

   
    if (isNaN(data.getTime())) {
      return 'Data inválida';
    }

    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }
}


