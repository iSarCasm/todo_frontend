export class Task {
  constructor(
    public id: number,
    public project_id: number,
    public name: string,
    public finished: boolean = false,
    public position: number,
    public desc?: string,
    public deadline?: string,
  ) {}
}
