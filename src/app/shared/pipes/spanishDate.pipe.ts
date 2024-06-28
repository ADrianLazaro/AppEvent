import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
@Pipe({
  name: 'spanishDate',
  standalone: true
})
export class SpanishDate implements PipeTransform {

  transform(value: string, format?:string): string {
    if (!value) {
      return '';
    }

    let dateString= value;

    const formattedDate = formatDate(dateString, 'longDate', 'es-ES');
    console.log(formattedDate);
    return formattedDate;

  }


}
