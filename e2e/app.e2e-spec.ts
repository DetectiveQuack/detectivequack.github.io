import { Detectivequack.Github.IoPage } from './app.po';

describe('detectivequack.github.io App', () => {
  let page: Detectivequack.Github.IoPage;

  beforeEach(() => {
    page = new Detectivequack.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
