import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Project } from '../project.model';
import { DashboardService } from '../../dashboard/dashboard.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  @Input() project: Project;

  constructor(
    private activeModal: NgbActiveModal,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
  }

  updateProject() {
    this.dashboardService.updateProject(this.project);
    this.activeModal.close();
  }
}
