import { browser, by, element } from 'protractor';

export class PanelPage{


  
  navigateTo() {
    return browser.get('http://localhost:4200/#/Caliber/panel');
  }



  clickBack(){
   
    let e = element(by.xpath('/html/body/div/app-root/app-janus/app-nav/nav/div[2]/div/app-caliber-nav/ul/li[4]/a'));
      e.click();
      let d = element(by.xpath('/html/body/div/app-root/app-janus/app-nav/nav/div[2]/div/app-caliber-nav/ul/li[5]/a'));
    d.click();
  }

  getCreatePanelButton() {
    return element(by.xpath('/html/body/div/app-root/app-janus/app-caliber/app-panel/div/app-panel-searchbar/div/div/div[1]/app-create-panel/button')).getText();
  }

  getCreatePanelButtons() {
return element.all(by.xpath('/html/body/div/app-root/app-janus/app-caliber/app-panel/div/app-panel-searchbar/div/div/div[1]/app-create-panel/button')).count();
  }
}
