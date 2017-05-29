import { Project } from '../project/project.model';
import { Task } from '../task/task.model';
import { Comment } from '../comment/comment.model';

export const PROJECTS: Project[] = [
  new Project(
    1, 'Ruby on Rails', 'Need to learn Ruby on Rails.', true,
    [
      new Task(
        1, 1, 'Watch latest RubyConf2017', false, 1, 'has to be somewhere on youtube', '',
        [
          new Comment(1, 1, '@tenderlove', '/assets/mock/user1.jpeg', 'Who wants my stickers?'),
          new Comment(2, 1, 'Cat', '/assets/mock/user2.jpg', 'Meeeow!')
        ]
      ),
      new Task(
        2, 1, 'Practice with Ruby 2.4', false, 2, '', '01-06-2017',
        [
            new Comment(1, 1, '@tenderlove', '/assets/mock/user1.jpeg', 'This is how I am doing changes to ruby/core', ['/assets/mock/attachment.jpg']),
        ]
      ),
      new Task(
        3, 1, 'Checkout newest Ruby\\Rails digest', false, 3, 'dou.ua', '01-06-2017'
      ),
    ]
  ),
  new Project(
    2, 'Angular', 'Angular is required component of Ruby/JS stack.', true,
    [
      new Task(4, 2, 'Finish todo-frontend', false, 1),
      new Task(5, 2, 'Study angular guide', true, 2),
      new Task(6, 2, 'Watch Angular 4 Udemy video course', false, 3, 'pretty easy'),
      new Task(7, 2, 'Start working', true, 4),
    ]
  ),
  new Project(
    3, 'School', 'High education is important.'
  ),
  new Project(
    7, 'Home', '', true,
    [
      new Task(8, 7, 'Do cleaning', false, 1, 'including windows (OS)!!!'),
      new Task(9, 7, 'Wash dishes', false, 2)
    ]
  )
]
