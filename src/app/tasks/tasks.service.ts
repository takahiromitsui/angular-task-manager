import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskData } from './tasks.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = DUMMY_TASKS;
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(userId: string, taskData: NewTaskData) {
    this.tasks.unshift({
      id: Date.now().toString(),
      userId: userId,
      ...taskData,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
