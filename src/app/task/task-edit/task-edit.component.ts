import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Task } from '../task.model';
import { DashboardService } from '../../dashboard/dashboard.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css'],
})
export class TaskEditComponent implements OnInit {
  @Input() task: Task;
  date: NgbDateStruct;

  constructor(
    private activeModal: NgbActiveModal,
    private dashboardService: DashboardService,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.date = this.taskService.formatStringToDate(this.task.deadline);
  }

  updateTask() {
    this.task.deadline = this.taskService.formatDateToString(this.date);
    this.dashboardService.updateTask(this.task);
    this.activeModal.close();
  }
}
