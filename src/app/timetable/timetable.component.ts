import { Component, OnInit } from '@angular/core';
import { ClassDataService } from '../class-data.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  classes: any;
  filteredClasses = [];
  classesToDisplay: any;
  searchBy = '';
  byDay;

  constructor(private classDataService: ClassDataService) { }

  ngOnInit() {
    this.classes = this.classDataService.getClasses();

    for (let i = 0; i < this.classes.length; i++) {
      if (1 === this.classes[i].day) {
        this.classes[i].day = 'Monday';
      } else if (2 === this.classes[i].day) {
        this.classes[i].day = 'Tuesday';
      } else if (3 === this.classes[i].day) {
        this.classes[i].day = 'Wednesday';
      } else if (4 === this.classes[i].day) {
        this.classes[i].day = 'Thursday';
      } else if (5 === this.classes[i].day) {
        this.classes[i].day = 'Friday';
      } else if (6 === this.classes[i].day) {
        this.classes[i].day = 'Saturday';
      }
    }

    for (let x = 0; x < this.classes.length; x++) {
      if (0 === this.classes[x].level) {
        this.classes[x].level = 'Open Level';
      } else if (1 === this.classes[x].level) {
        this.classes[x].level = 'Beginners';
      } else if (2 === this.classes[x].level) {
        this.classes[x].level = 'Intermediate';
      } else if (3 === this.classes[x].level) {
        this.classes[x].level = 'Advanced';
      }
    }
    this.classesToDisplay = this.classes;
  }

  filterByDay(selection) {
    this.byDay = selection.value;
  }

  onKeySearch(input) {
    this.searchBy = input.target.value;
  }

}
