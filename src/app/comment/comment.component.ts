import { Component, OnInit, Input } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Comment } from './comment.model';
import { DashboardService } from '../dashboard/dashboard.service';
import { CommentEditComponent } from './comment-edit/comment-edit.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {
  @Input() comment: Comment;

  constructor(
    private dashboardService: DashboardService,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  ownedByUser() {
    return this.comment.user_name === this.dashboardService.user.name;
  }

  editComment() {
    const commentModalRef = this.modalService.open(CommentEditComponent);
    commentModalRef.componentInstance.comment = Object.assign({}, this.comment);
    this.activeModal.close();
  }

  deleteComment() {
    this.dashboardService.deleteComment(this.comment);
  }
}
