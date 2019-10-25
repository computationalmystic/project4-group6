import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

  contributors: Object;

  pulls: object;

  urlGroupId: string = this.route.snapshot.paramMap.get('groupId');

  urlRepoId: string = this.route.snapshot.paramMap.get('repoId');


 

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getContributors(this.urlGroupId, this.urlRepoId).subscribe(data => {
      this.contributors = data;

    }
    );

    this.dataService.getPulls(this.urlGroupId, this.urlRepoId).subscribe(data => {
      this.pulls = data;

    }
    );
  }

}
