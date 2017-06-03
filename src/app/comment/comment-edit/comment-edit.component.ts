import { Component, OnInit, Input } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { DashboardService } from '../../dashboard/dashboard.service';
import { Comment } from '../comment.model';
import { TaskViewComponent } from '../../task/task-view/task-view.component';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {
  @Input() comment: Comment;

  constructor(
    private activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
  }

  updateComment() {
    this.dashboardService.updateComment(this.comment);
    this.close();
  }

  close() {
    const taskModalRef = this.modalService.open(TaskViewComponent);
    taskModalRef.componentInstance.task = this.dashboardService.getTask(this.comment.task_id);
    this.activeModal.close();
  }
}
