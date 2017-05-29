export class Comment {
  constructor(
    public id: number,
    public task_id: number,
    public user_name: string,
    public user_avatar: string,
    public content: string,
    public attachments?: string[]
  ) {}
}
