# Project 4 - Group 6
###### Group Members: Brad Schinker, Cole Engelhard, Chris Rehagen

## Overview
Pulls JSON data and provides data visualizations for repositories, contributors, commits, and pull requests. 



## Method of Acquring JSON Data
 
 Retreiving all repo:
 ``` javascript
 getGroups(){    
      return this.http.get('http://augur.osshealth.io:5000/api/unstable/repo-groups/');  
 } 
 ```
 
 Retreiving repos from a selected group:
 ``` javascript
 getRepos(groupId: string){
      return this.http.get('http://augur.osshealth.io:5000/api/unstable/repo-groups/' + groupId + '/repos/' );
 }
 ````
 
 ## Displaying Data
 
  Example of how pulled data is displayed:
  ``` html
  <ng-container *ngIf="contributors">
    <div class="card-deck">

        <div *ngFor="let cont of contributors">

            <div class="card custom-card">

                <h3> User: {{ cont.user_id }} </h3>
                <br>
                <h4> Number of commits: {{ cont.commits }} </h4>
                <h4> Number of issues: {{ cont.issues }} </h4>
                <h4> Pull requests: {{ cont.pull_requests }} </h4>
                <h4> Total: {{ cont.total }} </h4>
            </div>
        </div>
    </div>
 </ng-container>
```

Handling Loading + Error Checks
``` html
 <ng-container *ngIf="!repos">
    <h4>Loading repos in group, please wait a moment...</h4>
</ng-container>

<ng-container *ngIf="repos && repos == []">
    <h4>No repositories found in this group</h4>
</ng-container>
```
