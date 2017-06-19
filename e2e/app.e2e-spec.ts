import { SreevaniPage } from './app.po';

describe('sreevani App', () => {
  let page: SreevaniPage;

  beforeEach(() => {
    page = new SreevaniPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
