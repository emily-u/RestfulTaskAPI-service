import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getOneTask();
    this.deleteOneTask();
  }

  getTasks() {
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(datafromserver => console.log("Got our tasks!", datafromserver));
  }

  getOneTask() {
    let tempObservable = this._http.get('/tasks/5a86020794eaf518961188cb');
    tempObservable.subscribe(datafromserver => console.log("Got a task by ID!", datafromserver));
  }

  deleteOneTask() {
    let tempObservable = this._http.delete('/tasks/5a8601bcacaf83188c6aa876');
    tempObservable.subscribe(datafromserver => console.log("Delete a task by ID!", datafromserver));
  }
}