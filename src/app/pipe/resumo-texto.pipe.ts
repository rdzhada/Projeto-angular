
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumoTexto'
})
export class ResumoTextoPipe implements PipeTransform {
  transform(value: string, limite: number = 100): string {
    if (!value) return '';
    if (value.length <= limite) return value;

    return value.substring(0, limite) + '...';
  }
}
