import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getGroups(){
    return this.http.get('http://augur.osshealth.io:5000/api/unstable/repo-groups/');
  }

  getRepos(groupId: string){
    return this.http.get('http://augur.osshealth.io:5000/api/unstable/repo-groups/' + groupId + '/repos/' );
  }

  getContributors(groupId: string, repoId: string){
    return this.http.get('http://augur.osshealth.io:5000/api/unstable/repo-groups/'
     + groupId + '/repos/' + repoId + '/contributors/' );
  } 

  getPulls(groupId: string, repoId: string){
    return this.http.get('http://augur.osshealth.io:5000/api/unstable/repo-groups/'
     + groupId + '/repos/' + repoId + '/pull-request-acceptance-rate/' );
  }

  getIssues(){
    return this.http.get('http://augur.osshealth.io:5000/api/unstable/repo-groups/24/repos/25151/issues-active');
  }
}
