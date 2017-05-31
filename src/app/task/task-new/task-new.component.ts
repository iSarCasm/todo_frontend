import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { DashboardService } from '../../dashboard/dashboard.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  @Input() project;
  name: string;
  desc: string;
  date;

  constructor(
    public activeModal: NgbActiveModal,
    private dashboardService: DashboardService,
    private taskService: TaskService
  ) { }

  ngOnInit() {
  }

  addNewTask() {
    this.date = this.taskService.formatDateToString(this.date);
    this.dashboardService.createTask(this.project, this.name, this.desc, this.date);
    this.activeModal.close();
  }
}
