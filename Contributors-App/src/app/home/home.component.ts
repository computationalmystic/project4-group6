import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  groups: Object;

  constructor( private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getGroups().subscribe(data => {
      this.groups = data;
      console.log(this.groups);
    }
    );
  }

}
