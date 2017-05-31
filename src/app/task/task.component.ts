import { Component, OnInit, Input } from '@angular/core';

import { Task } from './task.model';
import { DashboardService } from '../dashboard/dashboard.service';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor(
    private dashboardService: DashboardService,
    private taskService: TaskService
  ) { }

  ngOnInit() {
  }

  parsedTaskDeadline() {
    return this.taskService.prettyDate(this.task.deadline);
  }

  toggleComments() {
    this.dashboardService.toggleComments(this.task);
  }

  isActiveComments() {
    return this.dashboardService.isActiveComments(this.task);
  }

  deleteTask() {
    this.dashboardService.deleteTask(this.task);
  }
}
