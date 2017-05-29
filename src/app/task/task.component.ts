import { Component, OnInit, Input } from '@angular/core';

import { Task } from './task.model';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
  }

  toggleComments() {
    this.dashboardService.toggleComments(this.task);
  }

  isActiveComments() {
    return this.dashboardService.isActiveComments(this.task);
  }

}
