import { Project } from '../project/project.model';
import { PROJECTS } from './mock-projects';

export class DashboardService {
  private projects: Project[] = PROJECTS;

  getProjects(): Project[] {
    return this.projects;
  }
}
