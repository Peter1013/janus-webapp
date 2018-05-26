import {PanelPage} from './panel.po';
import {AppPage} from '../../app.po';
import { browser } from 'protractor';
// const PanelPage = require('./panel.po');
const baseUrl: String = browser.baseUrl + '/#/';
describe('test-app App', () => {
  let page = new PanelPage();

  beforeEach(() => {
    page = new PanelPage();
  });

  it('should have a create panel button', () => {
  //  AppPage.navigateTo('/');
    page.navigateTo();
    expect(page.getCreatePanelButton()).toBeTruthy();
  });

  it('should not render other pages', () =>{
    page.clickBack();
expect(page.getCreatePanelButtons()).toEqual(1);
  })


});
