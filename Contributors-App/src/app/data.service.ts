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
}
