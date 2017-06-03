import { Project } from '../project/project.model';

export class User {
  constructor(
    public uid: string,
    public name: string,
    public email: string,
    public avatar: string,
    public projects: Project[]
  ) {}
}
