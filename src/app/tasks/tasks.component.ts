import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';

type Tasks = {
  userId: string;
  name: string;
};

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) tasks!: Tasks;
  get selectedUserTasks() {
    return DUMMY_TASKS.filter((task) => task.userId === this.tasks.userId);
  }
}
