import { Component, OnInit, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Project } from './project.model';
import { DashboardService } from '../dashboard/dashboard.service';
import { TaskNewComponent } from '../task/task-new/task-new.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;

  constructor(
    private dashboardService: DashboardService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  newTask() {
    const taskModalRef = this.modalService.open(TaskNewComponent);
    taskModalRef.componentInstance.project = this.project;
  }

  archive() {
    this.dashboardService.projectArchive(this.project);
  }

  activate() {
    this.dashboardService.projectActivate(this.project);
  }

  editProject() {
    const taskModalRef = this.modalService.open(ProjectEditComponent);
    taskModalRef.componentInstance.project = Object.assign({}, this.project);
  }

  deleteProject() {
    this.dashboardService.deleteProject(this.project);
  }
}
