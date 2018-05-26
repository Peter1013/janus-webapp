import { browser, by, element, ElementHelper, protractor } from 'protractor';

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

  clickManageBatches() {
    // ensure that the navbar is visible by maximizing the browser
    //but why tho...
    browser.driver.manage().window().maximize();

    let EC = protractor.ExpectedConditions;
    browser.waitForAngular();
    let d = element(by.xpath('/html/body/div/app-root/app-janus/app-nav/nav/div[2]/div/app-caliber-nav/ul/li[2]/a'));
 //   const e = element(by.id('test-me'));

    d.click();     

    
  }
}
