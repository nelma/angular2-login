import { ProjetoLoginPage } from './app.po';

describe('projeto-login App', () => {
  let page: ProjetoLoginPage;

  beforeEach(() => {
    page = new ProjetoLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
