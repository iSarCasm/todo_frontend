import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StatsComponent } from './stats/stats.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { TaskService } from './task/task.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { CommentComponent } from './comment/comment.component';
import { ProjectNewComponent } from './project/project-new/project-new.component';
import { TaskNewComponent } from './task/task-new/task-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StatsComponent,
    AuthComponent,
    DashboardComponent,
    ProjectComponent,
    TaskComponent,
    CommentComponent,
    ProjectNewComponent,
    TaskNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, DashboardService, TaskService],
  entryComponents: [TaskNewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
