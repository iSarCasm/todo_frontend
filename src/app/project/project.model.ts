import { Task } from '../task/task.model';

export class Project {
  constructor(
    public id?: number,
    public title?: string,
    public desc?: string,
    public in_active?: boolean,
    public tasks?: Task[],
    public shared_url?: string
  ) {}

  getTask(id: number) {
    for(let task of this.tasks) {
      if (task.id === id) {
        return task;
      }
    }
  }

  hasTasks() {
    return this.tasks && this.tasks.length > 0;
  }

  sharedLink(): string {
    return '/shared/' + this.shared_url;
  }
}
