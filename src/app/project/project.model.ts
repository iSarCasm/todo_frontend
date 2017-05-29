import { Task } from '../task/task.model';

export class Project {
  constructor(
    public id: number,
    public title: string,
    public desc?: string,
    public in_active: boolean = true,
    public tasks: Task[] = [],
  ) {}

  getTask(id: number) {
    for(let task of this.tasks) {
      if (task.id === id) {
        return task;
      }
    }
  }
}
