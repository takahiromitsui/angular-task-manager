import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskData } from './tasks.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = DUMMY_TASKS;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(userId: string, taskData: NewTaskData) {
    this.tasks.unshift({
      id: Date.now().toString(),
      userId: userId,
      ...taskData,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
