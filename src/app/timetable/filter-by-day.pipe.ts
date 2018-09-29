import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDay'
})
export class FilterByDayPipe implements PipeTransform {

  filteredClasses;

  transform(classes: any, day: string): any {
    if (!day) {
      return classes
    } else {
      this.filteredClasses = [];
      for (let i = 0; i < classes.length; i++) {
        if (day === classes[i].day) {
          this.filteredClasses = this.filteredClasses.concat(classes[i]);
        }
      }
      return this.filteredClasses;
    }
  }

}
