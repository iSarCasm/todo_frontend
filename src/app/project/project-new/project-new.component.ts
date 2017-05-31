import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DashboardService } from '../../dashboard/dashboard.service';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {
  isAddingProject: boolean = false;
  title: string;
  desc: string;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
  }

  editNewProject() {
    this.isAddingProject = true;
  }

  cancelEditing() {
    this.isAddingProject = false;
    this.title = '';
    this.desc = '';
  }

  addNewProject() {
    this.dashboardService.createProject(this.title, this.desc);
    this.cancelEditing();
  }
}
