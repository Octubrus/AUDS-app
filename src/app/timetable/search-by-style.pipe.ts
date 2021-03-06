import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByStyle'
})
export class SearchByStylePipe implements PipeTransform {

  filteredClasses;

  transform(classes: any, searchValue: string): any {
    if (!searchValue) {
      return classes;
    } else {
      this.filteredClasses = [];
      for (let i = 0; i < classes.length; i++) {
        if (classes[i].style.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
          this.filteredClasses = this.filteredClasses.concat(classes[i]);
        }
      }
      return this.filteredClasses;
    }
  }

}
