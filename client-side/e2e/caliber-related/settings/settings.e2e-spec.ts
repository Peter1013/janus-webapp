/**
 * @author Bryce Charydczak | 1803-USF-MAR26 | Wezley Singleton
 */

import { AppPage } from './settings.po';
import { browser, element, by} from 'protractor';

describe('test-app Settings', () => {
  let page: AppPage;
  const baseUrl: String = browser.baseUrl + '/#/';

  beforeEach(() => {
    page = new AppPage();
  });

  it('should launch the dashboard of Janus', () => {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toContain(baseUrl + 'dashboard');
  });

  it('should click Calibur Icon button and direct to Calibur home page', () => {
    page.clickCaliberButton();
    expect(browser.getCurrentUrl()).toContain(baseUrl + 'Caliber/home');
  });

});
