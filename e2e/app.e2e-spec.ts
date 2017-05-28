import { TodoFrontendPage } from './app.po';

describe('todo-frontend App', () => {
  let page: TodoFrontendPage;

  beforeEach(() => {
    page = new TodoFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
