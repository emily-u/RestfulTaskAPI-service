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


  constructor(private _httpService: HttpService){}

  ngOnInit(){

    this._httpService.getTasks((res) => {
      this.tasks = res;
      this.showTasks = false;
    })

    
    // this.getTasksFromService();
    // this.num = 7;
    // this.randNum = Math.floor( (Math.random()  * 2 ) + 1);
    // this.str = 'Hello Angular Developer!';
    // this.first_name = 'Alpha';
    // this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
    // this.loggedIn = true;
  }
  onButtonClick(): void { 
    console.log(`Click event is working`);
    this.showTasks = true;
}
//   onButtonClickEvent(id) { 
//     console.log(`Click event is working with event: `, id);
    
// }
onsubmit() {
  this._httpService.getTaskFromID(this.eventId, (res) => {
    this.showid = res;
    this.showOneTask = true;
  })
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
