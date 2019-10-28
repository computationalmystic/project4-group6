import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  issues: Object;

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getIssues().subscribe(data => {
      this.issues = data;
      console.log(this.issues);
     }
    );
  }

}
