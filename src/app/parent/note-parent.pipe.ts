import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noteParent'
})
export class NoteParentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
