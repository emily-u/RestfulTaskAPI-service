import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  tasks;


  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this._httpService.getTasks((res) => {
      this.tasks = res;
    })
    // this.getTasksFromService();
    // this.num = 7;
    // this.randNum = Math.floor( (Math.random()  * 2 ) + 1);
    // this.str = 'Hello Angular Developer!';
    // this.first_name = 'Alpha';
    // this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
    // this.loggedIn = true;
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
