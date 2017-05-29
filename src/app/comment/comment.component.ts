import { Component, OnInit, Input } from '@angular/core';

import { Comment } from './comment.model';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {
  @Input() comment: Comment;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
  }

  deleteComment() {
    this.dashboardService.deleteComment(this.comment);
  }
}
