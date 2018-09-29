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
    'level': 0,
    'link': 'https://www.facebook.com/groups/198165370781164/'
  },
  {
    'style': 'Ballet Rep',
    'day': 2,
    'time': '17:00',
    'venue': 'Kings Pavillion',
    'level': 0,
    'link': 'https://www.facebook.com/groups/2044097822499507/'
  },
  {
    'style': 'Streetdance',
    'day': 2,
    'time': '18:00',
    'venue': 'Kings Pavillion',
    'level': 2,
    'link': 'https://www.facebook.com/groups/113979119331649/'
  },
  {
    'style': 'Salsa',
    'day': 2,
    'time': '19:00',
    'venue': 'Kings Pavillion',
    'level': 0,
    'link': 'https://www.facebook.com/groups/177950765595848/'
  },
  {
    'style': 'Salsa',
    'day': 2,
    'time': '20:00',
    'venue': 'Kings Pavillion',
    'level': 0,
    'link': 'https://www.facebook.com/groups/177950765595848/'
  },
  {
    'style': 'Tap',
    'day': 2,
    'time': '17:00',
    'venue': 'MacRobert 614',
    'level': 2,
    'link': 'https://www.facebook.com/groups/1547568102182655/'
  },
  {
    'style': 'Capoeira',
    'day': 2,
    'time': '19:30',
    'venue': 'ASV Aqua Studio',
    'level': 0,
    'link': 'https://www.facebook.com/groups/1071586212937322/'
  },
  {
    'style': 'Capoeira',
    'day': 2,
    'time': '20:30',
    'venue': 'ASV Aqua Studio',
    'level': 0,
    'link': 'https://www.facebook.com/groups/1071586212937322/'
  },
  {
    'style': 'Hip-Hop',
    'day': 3,
    'time': '16:00',
    'venue': 'Kings Pavillion',
    'level': 1,
    'link': 'https://www.facebook.com/groups/299121054218368/'
  },
  {
    'style': 'Zouk',
    'day': 3,
    'time': '18:00',
    'venue': 'Kings Pavillion',
    'level': 0,
    'link': 'https://www.facebook.com/groups/1840689226241164/'
  },
  {
    'style': 'Ballet',
    'day': 3,
    'time': '19:00',
    'venue': 'Kings Pavillion',
    'level': 3,
    'link': 'https://www.facebook.com/groups/504074030059329/'
  },
  {
    'style': 'Ballet',
    'day': 3,
    'time': '20:00',
    'venue': 'Kings Pavillion',
    'level': 3,
    'link': 'https://www.facebook.com/groups/504074030059329/'
  },
  {
    'style': 'Hip-Hop',
    'day': 3,
    'time': '17:00',
    'venue': 'Kings Pavillion',
    'level': 3,
    'link': 'https://www.facebook.com/groups/1975545615795262/'
  },
  {
    'style': 'Heels',
    'day': 4,
    'time': '16:00',
    'venue': 'Kings Pavillion',
    'level': 0,
    'link': 'https://www.facebook.com/groups/318075965414189/'
  },
  {
    'style': 'Modern',
    'day': 4,
    'time': '17:00',
    'venue': 'Kings Pavillion',
    'level': 2,
    'link': 'https://www.facebook.com/groups/113940455955500/'
  },
  {
    'style': 'Reggaeton',
    'day': 4,
    'time': '18:00',
    'venue': 'Kings Pavillion',
    'level': 0,
    'link': 'https://www.facebook.com/groups/1722742601347684/'
  },
  {
    'style': 'Ballet',
    'day': 4,
    'time': '19:00',
    'venue': 'Kings Pavillion',
    'level': 2,
    'link': 'https://www.facebook.com/groups/506484736047907/'
  },
  {
    'style': 'Voguing',
    'day': 5,
    'time': '16:00',
    'venue': 'Kings Pavillion',
    'level': 0,
    'link': 'https://www.facebook.com/groups/215109978694685/'
  },
  {
    'style': 'Ballet',
    'day': 5,
    'time': '17:00',
    'venue': 'Kings Pavillion',
    'level': 1,
    'link': 'https://www.facebook.com/groups/151069271913385/'
  },
  {
    'style': 'Broadway',
    'day': 5,
    'time': '18:00',
    'venue': 'Kings Pavillion',
    'level': 0,
    'link': 'https://www.facebook.com/groups/237208369766982/'
  },
  {
    'style': 'Highland',
    'day': 5,
    'time': '19:00',
    'venue': 'Kings Pavillion',
    'level': 1,
    'link': 'https://www.facebook.com/groups/646092478799573/'
  },
  {
    'style': 'Highland',
    'day': 5,
    'time': '20:00',
    'venue': 'Kings Pavillion',
    'level': 2,
    'link': 'https://www.facebook.com/groups/646092478799573/'
  },
  {
    'style': 'Bellydance',
    'day': 5,
    'time': '17:00',
    'venue': 'MacRobert 613',
    'level': 0,
    'link': 'https://www.facebook.com/groups/483606475453980/'
  },
  {
    'style': 'Kizomba',
    'day': 5,
    'time': '18:00',
    'venue': 'MacRobert 613',
    'level': 0,
    'link': 'https://www.facebook.com/groups/199588496884973/'
  },
  {
    'style': 'Ballroom',
    'day': 5,
    'time': '19:00',
    'venue': 'MacRobert 613',
    'level': 0,
    'link': 'https://www.facebook.com/groups/1734713213259592/'
  },
  {
    'style': 'Capoeira',
    'day': 5,
    'time': '19:00',
    'venue': 'ASV Aqua Studio',
    'level': 0,
    'link': 'https://www.facebook.com/groups/1071586212937322/'
  },
  {
    'style': 'Capoeira',
    'day': 5,
    'time': '20:00',
    'venue': 'ASV Aqua Studio',
    'level': 0,
    'link': 'https://www.facebook.com/groups/1071586212937322/'
  },
  {
    'style': 'Tango',
    'day': 6,
    'time': '15:00',
    'venue': 'MacRobert 614',
    'level': 0,
    'link': 'https://www.facebook.com/groups/AUDSTangoArgentino/'
  },
  {
    'style': 'Breakdance',
    'day': 6,
    'time': '16:00',
    'venue': 'MacRobert 614',
    'level': 2,
    'link': 'https://www.facebook.com/groups/529555677244531/'
  },
  {
    'style': 'Breakdance',
    'day': 6,
    'time': '17:00',
    'venue': 'MacRobert 614',
    'level': 2,
    'link': 'https://www.facebook.com/groups/529555677244531/'
  },
  {
    'style': 'Bachata',
    'day': 6,
    'time': '18:00',
    'venue': 'MacRobert 614',
    'level': 0,
    'link': 'https://www.facebook.com/groups/267801756593678/'
  },
  {
    'style': 'Bachata',
    'day': 6,
    'time': '19:00',
    'venue': 'MacRobert 614',
    'level': 0,
    'link': 'https://www.facebook.com/groups/267801756593678/'
  },
  ]

  getClasses() {
    return this.classes;
  }

}
