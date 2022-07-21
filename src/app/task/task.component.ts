import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Task } from '../Task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  public tasks: Task[] = [];
  public text: any;

  constructor(public service: HttpService) {}

  ngOnInit(): void {
    this.someFunc();
  }
  addTasks(text: any) {
    let body = {
      name: this.text,
      data: '19.07.22',
      done: false,
    };
    this.service.createTask(body).subscribe((result) => {
      this.tasks.push(result);
    });
  }
  deleteProduct(task: any) {
    this.service.deleteProduct(task).subscribe(() => {
      this.someFunc();
    });
  }

  someFunc() {
    this.service.getTasks().subscribe((result) => {
      this.tasks = result;
    });
  }
}
