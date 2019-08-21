import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(arr: Array<any>, sortField: string, order: boolean = true): any {

    if (arr.length < 2) { return arr; }

    const reverse = order ? -1 : 1;
    const field = sortField.toLowerCase();

    return arr.sort((a: any, b: any) => {
      const result = (a[field] < b[field]) ? -1 : (a[field] > b[field]) ? 1 : 0;
      return result * reverse;
    });
  }
}
