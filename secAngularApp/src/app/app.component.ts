import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  tasks;
  eventId;
  showid = {
    description: "",
    title: ""
  };
  showTasks: boolean;
  showOneTask: boolean;
  task;
  newTask = {
    title: "",
    description: ""
  };
  editTask = {
    title: "",
    description: ""
  };
  editTaskId;
  deleteTaskId;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this._httpService.getTasks((res) => {
      this.tasks = res;
      this.showTasks = false;
    })
  }

  showEditForm(idPassFromHTML) {
    document.getElementById(idPassFromHTML).style.display = "block";
  }

onButtonClick(): void {
  console.log(`Click event is working`);
  this.showTasks = true;
}

onsubmit() {
  this._httpService.getTaskFromID(this.eventId, (res) => {
    this.showid = res;
    this.showOneTask = true;
  })
  }

addTaskSubmit(){
  this._httpService.addTask(this.newTask, (resFromService) => {
    console.log("add task submit success", resFromService);
    this._httpService.getTasks((res) => {
      this.tasks = res;
      this.showTasks = false;
    })
    this.newTask = {
      title: "",
      description: ""
    };
  }); 
}

editTaskSubmit(task_id){
  this._httpService.editTask(task_id, this.editTask, (resFromService) => {
    console.log("edit task submit success");
    this._httpService.getTasks((res) => {
      this.tasks = res;
      this.showTasks = false;
    })
    this.editTask = {
      title: "",
      description: ""
    };
  }); 
}

deleteTaskButtonClicked(deleteTaskId){
  this._httpService.deleteTask(deleteTaskId, (res) => {
    console.log("delete Task Button Clicked");
    this._httpService.getTasks((res) => {
      this.tasks = res;
      this.showTasks = false;
    })
  })
}
}
   // getTasksFromService(){
  //    let observable = this._httpService.getTasks();
  //    observable.subscribe(data => {
  //       console.log("Got our tasks!", data)
  //       // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
  //       // This may be different for you, depending on how you set up your Task API.
  //       this.tasks = data['tasks'];
  //    });
  // }
}
