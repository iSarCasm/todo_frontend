import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { Task } from '../task.model';
import { DashboardService } from '../../dashboard/dashboard.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {
  @Input() task: Task;
  new_comment_content: string;

  constructor(
    public activeModal: NgbActiveModal,
    public dashboardService: DashboardService
  ) { }

  ngOnInit() {
  }

  addNewComment() {
    this.dashboardService.createComment(this.task, this.new_comment_content);
    this.new_comment_content = undefined;
  }
}
