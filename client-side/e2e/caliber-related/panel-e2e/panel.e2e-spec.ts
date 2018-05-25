/**
 * @author Bryce Charydczak | 1803-USF-MAR26 | Wezley Singleton
 */

import {PanelPage} from './panel.po';
import {browser} from 'protractor';

// const PanelPage = require('./panel.po');

describe('test-app Panel', () => {
  let page = new PanelPage();
  const baseUrl: String = browser.baseUrl + '/#/';


  beforeEach(() => {
    page = new PanelPage();
  });

  it('should launch the dashboard of Janus', () => {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toContain(baseUrl + 'dashboard');
  });

  it('should click Calibur Icon button and direct to Calibur home page', () => {
    page.clickCaliberButton();
    expect(browser.getCurrentUrl()).toContain(baseUrl + 'Caliber/home');
  });

  it('should have a create panel button', () => {
    page.clickPanelNav();
    expect(page.getCreatePanelButton()).toBeTruthy();
  });
});
