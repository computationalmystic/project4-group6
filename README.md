# Project 4 - Group 6
###### Group Members: Brad Schinker, Cole Engelhard, Chris Rehagen
###### Running Link: https://computationalmystic.github.io/project4-group6/finished-app/

## Note*
Link to the web page will not properly load data from endpoints because the endpoints are encoded with the http protocol, while github.io is running through https. This creates a mixed content error, which most web browsers block. We had a discussion with professor Goggins about this, and he said it was fine since you grade the code in a certain environment. The data will load if you use FireFox and disable the mixed content blocker in the config. The info for how to do this was found [here](https://support.mozilla.org/en-US/questions/1198894).

## Overview
Pulls JSON data and provides data visualizations for repositories, contributors, commits, and pull requests. 


## Walkthrough
Upon loading into the app, you will be shown repository groups, with each Angular card being a different group. Clicking on a card will take you into that repo group and you'll see each repository within it. From there you can see data about contributions, and pull requestions about that respective repo. Clicking on Other info will give you information on the issues created within a repository.

## Code Snippets
#### Method of Acquring JSON Data
 
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
 
 #### Displaying Data
 
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
