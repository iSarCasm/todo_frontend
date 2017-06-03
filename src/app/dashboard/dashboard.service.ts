import { EventEmitter} from '@angular/core';

import { Project } from '../project/project.model';
import { PROJECTS } from './mock-projects';
import { Task } from '../task/task.model';
import { Comment} from '../comment/comment.model';

export class DashboardService {
  private projects: Project[] = PROJECTS;
  projectsUpdated = new EventEmitter<Project[]>();

  getProjects(): Project[] {
    return this.projects;
  }

  createProject(title: string, desc: string) {
    this.projects.unshift(
      new Project(undefined, title, desc)
    );
  }

  createTask(project: Project, name: string, desc?: string, date?: string) {
    this.getProject(project.id).tasks.unshift(
      new Task(undefined, project.id, name, false, 0, desc, date)
    );
  }

  createComment(task: Task, content: string) {
    this.getTask(task.id).comments.push(
      new Comment(undefined, task.id, "user_name", "assets/mock/user1.jpeg", content)
    );
  }

  updateProject(updated_project: Project) {
    let project = this.getProject(updated_project.id);
    project.title = updated_project.title;
    project.desc = updated_project.desc;
  }

  updateTask(updated_task: Task) {
    let task = this.getTask(updated_task.id);
    task.name = updated_task.name;
    task.desc = updated_task.desc;
    task.deadline = updated_task.deadline;
  }

  projectActivate(project: Project) {
    project.in_active = true;
  }

  projectArchive(project: Project) {
    project.in_active = false;
  }

  taskFinish(task: Task) {
    task.finished = true;
  }

  taskToProgress(task: Task) {
    task.finished = false;
  }

  deleteComment(comment: Comment) {
    let task = this.getTask(comment.task_id);
    task.comments = task.comments.filter(item => item !== comment);
  }

  deleteTask(task: Task) {
    let project = this.getProject(task.project_id);
    project.tasks = project.tasks.filter(item => item !== task);
  }

  deleteProject(project: Project) {
    this.projects = this.projects.filter(item => item !== project);
    this.projectsUpdated.emit(this.projects);
  }

  private getProject(id: number) {
    for(let project of this.projects) {
      if (project.id === id) {
        return project;
      }
    }
  }

  private getTask(id: number) {
    for(let project of this.projects) {
      for(let task of project.tasks) {
        if(task.id === id) {
          return task;
        }
      }
    }
  }
}
