import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassDataService {

  constructor() { }

  classes = [{
    'style': 'Contemporary',
    'day': 1,
    'time': '17:00',
    'venue': 'MacRobert 614',
    'level': 0
  }, {
    'style': 'Ballet Rep',
    'day': 2,
    'time': '17:00',
    'venue': 'Kings Pavillion',
    'level': 0
  },
  {
    'style': 'Streetdance',
    'day': 2,
    'time': '18:00',
    'venue': 'Kings Pavillion',
    'level': 2
  },
  {
    'style': 'Salsa',
    'day': 2,
    'time': '19:00',
    'venue': 'Kings Pavillion',
    'level': 0
  },
  {
    'style': 'Salsa',
    'day': 2,
    'time': '20:00',
    'venue': 'Kings Pavillion',
    'level': 0
  },
  {
    'style': 'Tap',
    'day': 2,
    'time': '17:00',
    'venue': 'MacRobert 614',
    'level': 2
  },
  {
    'style': 'Capoeira',
    'day': 2,
    'time': '19:30',
    'venue': 'ASV Aqua Studio',
    'level': 0
  },
  {
    'style': 'Capoeira',
    'day': 2,
    'time': '20:30',
    'venue': 'ASV Aqua Studio',
    'level': 0
  },
  {
    'style': 'Hip-Hop',
    'day': 3,
    'time': '16:00',
    'venue': 'Kings Pavillion',
    'level': 1
  },
  {
    'style': 'Zouk',
    'day': 3,
    'time': '18:00',
    'venue': 'Kings Pavillion',
    'level': 0
  },
  {
    'style': 'Ballet',
    'day': 3,
    'time': '19:00',
    'venue': 'Kings Pavillion',
    'level': 3
  },
  {
    'style': 'Ballet',
    'day': 3,
    'time': '20:00',
    'venue': 'Kings Pavillion',
    'level': 3
  },
  {
    'style': 'Hip-Hop',
    'day': 3,
    'time': '17:00',
    'venue': 'Kings Pavillion',
    'level': 3
  },
  {
    'style': 'Heels',
    'day': 4,
    'time': '16:00',
    'venue': 'Kings Pavillion',
    'level': 0
  },
  {
    'style': 'Modern',
    'day': 4,
    'time': '17:00',
    'venue': 'Kings Pavillion',
    'level': 2
  },
  {
    'style': 'Reggaeton',
    'day': 4,
    'time': '18:00',
    'venue': 'Kings Pavillion',
    'level': 0
  },
  {
    'style': 'Ballet',
    'day': 4,
    'time': '19:00',
    'venue': 'Kings Pavillion',
    'level': 2
  },
  {
    'style': 'Voguing',
    'day': 5,
    'time': '16:00',
    'venue': 'Kings Pavillion',
    'level': 0
  },
  {
    'style': 'Ballet',
    'day': 5,
    'time': '17:00',
    'venue': 'Kings Pavillion',
    'level': 1
  },
  {
    'style': 'Broadway',
    'day': 5,
    'time': '18:00',
    'venue': 'Kings Pavillion',
    'level': 0
  },
  {
    'style': 'Highland',
    'day': 5,
    'time': '19:00',
    'venue': 'Kings Pavillion',
    'level': 0
  },
  {
    'style': 'Highland',
    'day': 5,
    'time': '20:00',
    'venue': 'Kings Pavillion',
    'level': 0
  },
  {
    'style': 'Bellydance',
    'day': 5,
    'time': '17:00',
    'venue': 'MacRobert 613',
    'level': 0
  },
  {
    'style': 'Kizomba',
    'day': 5,
    'time': '18:00',
    'venue': 'MacRobert 613',
    'level': 0
  },
  {
    'style': 'Ballroom',
    'day': 5,
    'time': '19:00',
    'venue': 'MacRobert 613',
    'level': 0
  },
  {
    'style': 'Capoeira',
    'day': 5,
    'time': '19:00',
    'venue': 'ASV Aqua Studio',
    'level': 0
  },
  {
    'style': 'Capoeira',
    'day': 5,
    'time': '20:00',
    'venue': 'ASV Aqua Studio',
    'level': 0
  },
  {
    'style': 'Tango',
    'day': 6,
    'time': '15:00',
    'venue': 'MacRobert 614',
    'level': 0
  },
  {
    'style': 'Breakdance',
    'day': 6,
    'time': '16:00',
    'venue': 'MacRobert 614',
    'level': 2
  },
  {
    'style': 'Breakdance',
    'day': 6,
    'time': '17:00',
    'venue': 'MacRobert 614',
    'level': 2
  },
  {
    'style': 'Bachata',
    'day': 6,
    'time': '18:00',
    'venue': 'MacRobert 614',
    'level': 0
  },
  {
    'style': 'Bachata',
    'day': 6,
    'time': '19:00',
    'venue': 'MacRobert 614',
    'level': 0
  },
  ]

  getClasses() {
    return this.classes;
  }

}
