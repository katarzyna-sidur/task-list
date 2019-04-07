import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeLetter'
})
export class ChangeLetterPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
