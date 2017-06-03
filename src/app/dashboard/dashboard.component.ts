import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Project } from '../project/project.model';
import { Task } from '../task/task.model';
import { DashboardService } from './dashboard.service';
import { ProjectNewComponent } from '../project/project-new/project-new.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects: Project[];

  constructor(
    private dashboardService: DashboardService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.projects = this.dashboardService.getProjects();
    this.dashboardService.projectsUpdated
      .subscribe(
        (projects: Project[]) => {
          this.projects = projects;
        }
      )
  }

  newProject() {
    const taskModalRef = this.modalService.open(ProjectNewComponent);
  }
}
