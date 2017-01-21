import { Layout2Page } from './app.po';

describe('layout2 App', function() {
  let page: Layout2Page;

  beforeEach(() => {
    page = new Layout2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
