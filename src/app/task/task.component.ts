import { Component, OnInit, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Task } from './task.model';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
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
    private modalService: NgbModal,
    private dashboardService: DashboardService,
    private taskService: TaskService
  ) { }

  ngOnInit() {
  }

  parsedTaskDeadline() {
    return this.taskService.prettyDate(this.task.deadline);
  }

  changeFinished(e) {
    if (e.target.checked) {
      this.dashboardService.taskFinish(this.task);
    } else {
      this.dashboardService.taskToProgress(this.task);
    }
  }

  viewTask() {
    const taskModalRef = this.modalService.open(TaskViewComponent);
    taskModalRef.componentInstance.task = this.task;
  }

  editTask() {
    const taskModalRef = this.modalService.open(TaskEditComponent);
    taskModalRef.componentInstance.task = Object.assign({}, this.task);
  }

  deleteTask() {
    this.dashboardService.deleteTask(this.task);
  }
}
