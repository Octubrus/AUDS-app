import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByStyle'
})
export class SearchByStylePipe implements PipeTransform {

  classDataFiltered;

  transform(classData: any, searchValue: string): any {
    this.classDataFiltered = [];

    if (!searchValue) {
      return classData;
    }

    for (let i = 0; i < classData.length; i++) {
      if (classData[i].style.indexOf(searchValue) !== -1) {
        this.classDataFiltered.push(classData[i]);
      }
    }

    return this.classDataFiltered;
  }

}
