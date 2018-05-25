/**
 * @author Bryce Charydczak | 1803-USF-MAR26 | Wezley Singleton
 */

import { AppPage } from './assess-batches.po';
import { browser, element, by} from 'protractor';

describe('test-app Assess Batches', () => {
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

  it('should click Assess Batches Nav button and direct to assess page', () => {
    page.clickAssessBatchesNav();
    expect(browser.getCurrentUrl()).toContain(baseUrl + 'Caliber/assess');
  });

  it('should display Average score', () => {
    expect(page.getAverageText()).toContain('Average');
  });

  it('should display Weekly Batch Average', () => {
    expect(page.getWeeklyBatchText()).toContain('Weekly Batch Average:');
  });

  
});
