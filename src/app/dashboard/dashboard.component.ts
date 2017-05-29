import { Component, OnInit } from '@angular/core';

import { Project } from '../project/project.model';
import { Task } from '../task/task.model';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  projects: Project[];
  isAddingProject: boolean = false;


  constructor(
    private dashboardService: DashboardService
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

  addNewProject() {
    this.isAddingProject = true;
  }

  cancelNewProject() {
    this.isAddingProject = false;
  }
}
