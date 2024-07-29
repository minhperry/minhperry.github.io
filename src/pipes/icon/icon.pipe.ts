import { Pipe, PipeTransform } from '@angular/core';
import { Links } from '../../interfaces/links';

@Pipe({
  name: 'filterIcon'
})
export class IconPipe implements PipeTransform {

  transform(items: Links[]): Links[] {
    return items ? items.filter(item => !item.hidden) : [];
  }

}
