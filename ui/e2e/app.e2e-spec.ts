import { PathfinderPage } from './app.po';

describe('pathfinder App', () => {
  let page: PathfinderPage;

  beforeEach(() => {
    page = new PathfinderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
