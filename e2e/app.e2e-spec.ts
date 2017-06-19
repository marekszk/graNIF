import { GraPage } from './app.po';

describe('gra App', () => {
  let page: GraPage;

  beforeEach(() => {
    page = new GraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
