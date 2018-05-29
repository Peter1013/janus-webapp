/**
 * @author Bryce Charydczak | 1803-USF-MAR26 | Wezley Singleton
 */

import { browser, by, element, ElementHelper } from 'protractor';
import { GlobalVars } from '../../globalVars';
export class AppPage {

  v = new GlobalVars();

  navigateTo() {
    return browser.get(this.v.url());
  }
  getTitleText() {
    return element(by.css('app-root h2')).getText();
  }

  getCaliberTitleText() {
    return element(by.xpath('/html/body/div/app-root/app-janus/app-dashboard/div[2]/div[2]/div[1]/h1')).getText();
  }

  getTrainingName() {
    return element(by.xpath('//*[@id="manage"]/div[2]/div/table/thead/tr/th[1]')).getText();
  }

  getTrainingType() {
    return element(by.xpath('//*[@id="manage"]/div[2]/div/table/thead/tr/th[2]')).getText();
  }

  getSkillType() {
    return element(by.xpath('//*[@id="manage"]/div[2]/div/table/thead/tr/th[3]')).getText();
  }

  getLocation() {
    return element(by.xpath('//*[@id="manage"]/div[2]/div/table/thead/tr/th[4]')).getText();
  }

  getStartDate() {
    return element(by.xpath('//*[@id="manage"]/div[2]/div/table/thead/tr/th[5]')).getText();
  }

  getEndDate() {
    return element(by.xpath('//*[@id="manage"]/div[2]/div/table/thead/tr/th[6]')).getText();
  }

  getGoodGrade() {
    return element(by.xpath('//*[@id="manage"]/div[2]/div/table/thead/tr/th[7]')).getText();
  }

  getPassingGrade() {
    return element(by.xpath('//*[@id="manage"]/div[2]/div/table/thead/tr/th[8]')).getText();
  }

  clickCaliberButton() {
    const e = element(by.xpath('/html/body/div/app-root/app-janus/app-dashboard/div[2]/div[2]/img'));
    e.click();
  }

  clickAssessBatchesNav() {
    const e = element(by.xpath('/html/body/div/app-root/app-janus/app-nav/nav/div[2]/div/app-caliber-nav/ul/li[3]'));
    e.click();
  }

  clickManageBatchesNav() {
    const e = element(by.xpath('/html/body/div/app-root/app-janus/app-nav/nav/div[2]/div/app-caliber-nav/ul/li[2]'));
    e.click();
  }

  clickQualityAuditNav() {
    const e = element(by.xpath('/html/body/div/app-root/app-janus/app-nav/nav/div[2]/div/app-caliber-nav/ul/li[4]/a'));
    e.click();
  }

  clickImportBatch() {
    const e = element(by.xpath('//*[@id="manage"]/div[1]/div[2]/button[2]'));
    e.click();
  }

  clickCreateBatch() {
    const e = element(by.xpath('//*[@id="manage"]/div[1]/div[2]/button[1]'));
    e.click();
  }
}
