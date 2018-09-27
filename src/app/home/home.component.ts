import { Component, OnInit } from '@angular/core';
import { ClassDataService } from '../class-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  classes;
  
  constructor(private classDataService: ClassDataService) { }

  ngOnInit() {
    this.classes = this.classDataService.getClasses();
  }

}
