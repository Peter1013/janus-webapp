/**
 * @author Bryce Charydczak | 1803-USF-MAR26 | Wezley Singleton
 */

import { browser, by, element, ElementHelper } from 'protractor';
import { Var } from '../globalVars';
export class AppPage {

  v = new Var();

  navigateTo() {
    return browser.get(this.v.url());
  }

  clickAssessBatchesNav() {
    const e = element(by.xpath('/html/body/div/app-root/app-janus/app-nav/nav/div[2]/div/app-caliber-nav/ul/li[3]'));
    e.click();
  }

  clickCaliberButton() {
    const e = element(by.xpath('/html/body/div/app-root/app-janus/app-dashboard/div[2]/div[2]/img'));
    e.click();
  }

  getWeeklyBatchText() {
    return element(by.xpath('/html/body/div/app-root/app-janus/app-caliber/app-assess[2]/div[1]/div[3]/div/table/tbody/tr/td[2]/strong')).getText();
  }

  getAverageText() {
    return element(by.xpath('/html/body/div/app-root/app-janus/app-caliber/app-assess[2]/div[1]/div[3]/div/table/tbody/tr/td[1]/strong')).getText();
  }



}
