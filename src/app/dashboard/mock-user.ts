import { User } from '../user/user.model';
import { PROJECTS } from './mock-projects';

export const USER: User = new User(
  "sarcasm008@gmail.com",
  "isarcasm",
  "sarcasm008@gmail.com",
  "assets/mock/user2.jpg",
  PROJECTS
)
