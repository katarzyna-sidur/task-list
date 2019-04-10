import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';
import { ActivatedRoute } from '@angular/router';
import { bindCallback } from 'rxjs';

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
        userId: 1,
        properties: null,
        id: null,
    };

    tasks: Task[] = [];
    myDate = new Date().toDateString();

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

    setTaskDone(item: Task) {
        item.isDone = true;
        this.taskService.updateTask(item).subscribe((data) => {
        });
    }

    setTaskToDo(item: Task) {
        item.isDone = false;
        this.taskService.updateTask(item).subscribe((data) => {
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

    deleteTask(task: Task) {
        this.taskService.deleteTask(task).subscribe((data) => {
            this.tasks = this.tasks.filter((item: Task) => {
                return item.id !== task.id;
            });
        });
    }

    getTodayTask() {
        return this.tasks.filter((item: Task) => {
            return new Date(item.finishDate).toDateString() === new Date().toDateString() && item.isDone === false;
        });
    }

    getOverdueTask() {
        return this.tasks.filter((item: Task) => {
            return new Date(item.finishDate) < new Date()
            && new Date(item.finishDate).toDateString() !== new Date().toDateString()
            && item.isDone === false;
        });
    }

    getColor(item: Task) {
       return new Date(item.finishDate) < new Date()
            && new Date(item.finishDate).toDateString() !== new Date().toDateString()
            && item.isDone === false ? 'red' : 'black';
    }
}
