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

  clickReportsNav() {
    const e = element(by.xpath('/html/body/div/app-root/app-janus/app-nav/nav/div[2]/div/app-caliber-nav/ul/li[6]'));
    e.click();
  }

  clickCaliberButton() {
    const e = element(by.xpath('/html/body/div/app-root/app-janus/app-dashboard/div[2]/div[2]/img'));
    e.click();
  }

}
