import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos: Object;

  urlId: string = this.route.snapshot.paramMap.get('groupId');

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getRepos(this.urlId).subscribe(data => {
      this.repos = data;
      console.log(this.repos);
    }
    );
  }

}
