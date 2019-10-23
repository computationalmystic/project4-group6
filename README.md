# Project 4 - Group 6
###### Group Members: Brad Schinker, Cole Engelhard, Chris Rehagen

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

