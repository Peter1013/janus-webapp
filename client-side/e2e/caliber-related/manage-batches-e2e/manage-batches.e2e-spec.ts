import { AppPage } from './manage-batches.po';
import { browser } from 'protractor';

describe('test-app Batch Management', () => {
  let page: AppPage;
  const baseUrl: String = browser.baseUrl + '/#/';

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Please Select One Of the Following Applications :');
  });

  it('should display Caliber button', () => {
    expect(page.getCaliberTitleText()).toEqual('Caliber');
  });

  it('should click Caliber button and go to Caliber home page', () => {
    page.clickCaliberButton();
    expect(browser.getCurrentUrl()).toContain(baseUrl + 'Caliber/home');
  });

  it('should click Manage Batches Navigation button and go to Batch overview page', () => {
    page.clickManageBatchesNav();
    expect(browser.getCurrentUrl()).toContain(baseUrl + 'Caliber/manage');
  });

  it('should display Training Name', () => {
    expect(page.getTrainingName()).toEqual('Training Name');
  });

  it('should display Training Type', () => {
    expect(page.getTrainingType()).toEqual('Training Type');
  });

  it('should display Skill Type', () => {
    expect(page.getSkillType()).toEqual('Skill Type');
  });

  it('should display Location', () => {
    expect(page.getLocation()).toEqual('Location');
  });

  it('should display Start Date', () => {
    expect(page.getStartDate()).toEqual('Start Date');
  });

  it('should display End Date', () => {
    expect(page.getEndDate()).toEqual('End Date');
  });

  it('should display Good grade', () => {
    expect(page.getGoodGrade()).toEqual('Good Grade');
  });

  it('should display Passing Grade', () => {
    expect(page.getPassingGrade()).toEqual('Passing Grade');
  });
  /*if('should click Create Batch Button and display a Batch Creation Modal', () => {
    page.clickCreateBatch();
    expect()
  })
  */

  it('should click Assess Batches Navigation button and go to Batch Assessment Page', () => {
    page.clickAssessBatchesNav();
    expect(browser.getCurrentUrl()).toContain(baseUrl + 'Caliber/assess');
  });

  it('should click Quality Audit Navigation button and go to Quality Audit Page', () => {
    page.clickQualityAuditNav();
    expect(browser.getCurrentUrl()).toContain(baseUrl + 'Caliber/quality');
  });
});
