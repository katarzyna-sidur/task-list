import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';

@Pipe({
    name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

    transform(value: Task[], args?: any): Task[] {
        return value.sort((a, b) => {
            if (a.finishDate < b.finishDate) {
                return -1;
            } else if (a.finishDate > b.finishDate) {
                return 1;
            } else {
                return 1;
            }
        });
    }
}
