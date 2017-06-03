import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { DashboardService } from '../../dashboard/dashboard.service';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {
  title: string;
  desc: string;

  constructor(
    private dashboardService: DashboardService,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  addNewProject() {
    this.dashboardService.createProject(this.title, this.desc);
    this.activeModal.close();
  }
}
