import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2TokenService } from 'angular2-token';

import { ServerApiService } from './server-api.service';
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
import { TaskViewComponent } from './task/task-view/task-view.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { TaskEditComponent } from './task/task-edit/task-edit.component';
import { CommentEditComponent } from './comment/comment-edit/comment-edit.component';
import { SignUpComponent } from './sign-up/sign-up.component';

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
    TaskNewComponent,
    TaskViewComponent,
    ProjectEditComponent,
    TaskEditComponent,
    CommentEditComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [Angular2TokenService, ServerApiService, AuthService, AuthGuard, DashboardService, TaskService],
  entryComponents: [
    ProjectNewComponent,
    ProjectEditComponent,
    TaskNewComponent,
    TaskEditComponent,
    TaskViewComponent,
    CommentEditComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
