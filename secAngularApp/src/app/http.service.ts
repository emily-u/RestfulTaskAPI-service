import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.getOneTask();
    // this.deleteOneTask();
  }

  getTasks(callback) {
    this._http.get("/tasks").subscribe(
      (res) => {
        callback(res);
      })
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(datafromserver => console.log("Got our tasks!", datafromserver));
    
  }

  getTaskFromID(eventId, callback) {
    this._http.post("/tasks/" + eventId, {}).subscribe(
      (res) => {
        callback(res);
      })
  }

  

  // getOneTask() {
  //   let tempObservable = this._http.get('/tasks/5a86020794eaf518961188cb');
  //   tempObservable.subscribe(datafromserver => console.log("Got a task by ID!", datafromserver));
  // }

  // deleteOneTask() {
  //   let tempObservable = this._http.delete('/tasks/5a8601bcacaf83188c6aa876');
  //   tempObservable.subscribe(datafromserver => console.log("Delete a task by ID!", datafromserver));
  // }
}