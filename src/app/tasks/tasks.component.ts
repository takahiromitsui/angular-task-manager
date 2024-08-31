import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskData, Tasks } from './tasks.model';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  dummyTasks = DUMMY_TASKS;
  @Input({ required: true }) tasks!: Tasks;
  isAddingTask = false;

  get selectedUserTasks() {
    return this.dummyTasks.filter((task) => task.userId === this.tasks.userId);
  }

  onCompleteTask(id: string) {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.dummyTasks.unshift({
      id: Date.now().toString(),
      userId: this.tasks.userId,
      ...taskData,
    });
    this.isAddingTask = false;
  }
}
