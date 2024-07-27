import { Pipe, PipeTransform } from '@angular/core';
import { Links } from '../../app/social/social.component';

@Pipe({
  name: 'filterIcon'
})
export class IconPipe implements PipeTransform {

  transform(items: Links[]): Links[] {
    return items ? items.filter(item => !item.hidden) : [];
  }

}
