import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    panelExpanded = false;
    dpConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();

    task: Task = {
        title: null,
        isDone: false,
        startDate: null,
        finishDate: null,
        userId: null,
        properties: null,
        id: null,
    };

    tasks: Task[] = [];

    constructor(private taskService: TaskService, private route: ActivatedRoute) {
        this.dpConfig.containerClass = 'theme-default';
    }

    ngOnInit() {
        this.tasks = this.route.snapshot.data['tasks'];
    }

    saveTask() {
        this.taskService.saveTask(this.task).subscribe((data) => {
            this.tasks.push(data);

            this.task.title = '';
            this.task.startDate = null;
            this.task.finishDate = null;
            this.task.properties = '';
        });
    }

    getTaskToDo() {
        return this.tasks.filter((item: Task) => {
            return item.isDone === false;
        });
    }

    getTaskDone() {
        return this.tasks.filter((item: Task) => {
            return item.isDone === true;
        });
    }

}
