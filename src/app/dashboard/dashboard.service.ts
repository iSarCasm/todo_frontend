import { Project } from '../project/project.model';
import { PROJECTS } from './mock-projects';
import { Task } from '../task/task.model';

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

  getProjects(): Project[] {
    return this.projects;
  }
}
