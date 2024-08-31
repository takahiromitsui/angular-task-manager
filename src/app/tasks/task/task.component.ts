import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../../dummy-tasks';

type Task = (typeof DUMMY_TASKS)[number];

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
}
