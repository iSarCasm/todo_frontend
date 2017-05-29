import { Project } from '../project/project.model';
import { PROJECTS } from './mock-projects';
import { Task } from '../task/task.model';
import { Comment} from '../comment/comment.model';

export class DashboardService {
  private projects: Project[] = PROJECTS;

  private openedComments: Task;

  toggleComments(task: Task) {
    if (task === this.openedComments) {
      this.openedComments = undefined;
    } else {
      this.openedComments = task;
    }
  }

  isActiveComments(task: Task) {
    return task == this.openedComments;
  }

  getProject(id: number) {
    for(let project of this.projects) {
      if (project.id === id) {
        return project;
      }
    }
  }

  getTask(id: number) {
    for(let project of this.projects) {
      for(let task of project.tasks) {
        if(task.id === id) {
          return task;
        }
      }
    }
  }

  deleteComment(comment: Comment) {
    let task = this.getTask(comment.task_id);
    task.comments = task.comments.filter(item => item !== comment);
  }

  getProjects(): Project[] {
    return this.projects;
  }
}
