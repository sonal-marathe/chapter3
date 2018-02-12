import { SVGEllipse1Page } from './app.po';

describe('svgellipse1 App', () => {
  let page: SVGEllipse1Page;

  beforeEach(() => {
    page = new SVGEllipse1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
