import { browser, by, element, ElementHelper } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h2')).getText();
  }

  getCaliberTitleText() {
    return element(by.xpath('/html/body/div/app-root/app-janus/app-dashboard/div[2]/div[2]/div[1]/h1')).getText();
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
}
