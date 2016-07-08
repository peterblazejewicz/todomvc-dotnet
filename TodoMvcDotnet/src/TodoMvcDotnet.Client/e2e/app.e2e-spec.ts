import { TodoMvcDotnetPage } from './app.po';

describe('todo-mvc-dotnet App', function() {
  let page: TodoMvcDotnetPage;

  beforeEach(() => {
    page = new TodoMvcDotnetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
