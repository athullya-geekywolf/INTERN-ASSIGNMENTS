import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'active',
  standalone: true
})
export class ActivePipe implements PipeTransform {

  transform(value: string, state: boolean): any{
    if(state == true)
      return value;
    
  }

}
