import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

    @Input()
    tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  setTaskDone(item: Task) {
    item.isDone = true;
    this.taskService.updateTask(item).subscribe((data) => {
    });
  }
}
