import { SimpleCSS3AnimPage } from './app.po';

describe('simple-css3-anim App', () => {
  let page: SimpleCSS3AnimPage;

  beforeEach(() => {
    page = new SimpleCSS3AnimPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
