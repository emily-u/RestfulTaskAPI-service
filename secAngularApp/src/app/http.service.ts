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

  addTask(newtask, callback){
    this._http.post('/tasks', newtask).subscribe((resFromServer) => {
      callback(resFromServer);
    })
}

  editTask(editTaskId, edit_content, callback){
    this._http.put('/tasks/' + editTaskId, edit_content).subscribe((resFromServer) => {
      callback(resFromServer);
    })
}

  deleteTask(deleteTaskId, callback){
    this._http.delete('/tasks/' + deleteTaskId, {}).subscribe((resFromServer) => {
      callback(resFromServer);
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