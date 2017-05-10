import { MeanEducationFrontPage } from './app.po';

describe('mean-education-front App', () => {
  let page: MeanEducationFrontPage;

  beforeEach(() => {
    page = new MeanEducationFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
