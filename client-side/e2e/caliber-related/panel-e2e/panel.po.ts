import { browser, by, element } from 'protractor';
import { Var } from '../globalVars';
export class PanelPage {

  v = new Var();

  navigateTo() {
    return browser.get(this.v.url());
  }

  getCreatePanelButton() {
    return element(by.buttonText('Create Panel')).getText();
  }

  clickPanelNav() {
    const e = element(by.xpath('/html/body/div/app-root/app-janus/app-nav/nav/div[2]/div/app-caliber-nav/ul/li[5]'));
    e.click();
  }

  clickCaliberButton() {
    const e = element(by.xpath('/html/body/div/app-root/app-janus/app-dashboard/div[2]/div[2]/img'));
    e.click();
  }
}
