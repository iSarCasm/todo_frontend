import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DashboardService } from '../../dashboard/dashboard.service';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {
  @Output() canceled = new EventEmitter<boolean>();

  title: string;
  desc: string;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.canceled.emit(false);
    this.title = '';
    this.desc = '';
  }

  addProject() {
    this.dashboardService.createProject(this.title, this.desc);
    this.cancel();
  }
}
