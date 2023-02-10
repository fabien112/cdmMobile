import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detailsquizz'
})
export class DetailsquizzPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
