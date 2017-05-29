import { Component, OnInit, Input } from '@angular/core';

import { Project } from './project.model';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
  }

  deleteProject() {
    this.dashboardService.deleteProject(this.project);
  }
}
