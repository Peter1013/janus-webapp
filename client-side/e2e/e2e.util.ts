import { browser, by, element, ElementFinder } from 'protractor';

//a layer of foundation and blush for our tests

export class Util{

    private static baseUrl : string = browser.baseUrl;


    //beautifies the navigation process
    public static navigateTo(source : string){
        return browser.get(this.baseUrl+source);
      }

      //simple getters and setters for basic encapsulation
      public static getBaseUrl(){
        return this.baseUrl;
      }
      public static setBaseUrl(str : string){
        this.baseUrl = str;
      }

      //returns the url to baseUrl if things become too messy
      public static resetBaseUrl(){
        this.baseUrl = browser.baseUrl;
      }

      public static addToBase(str : string){
          this.baseUrl += str;
      }



      //beautifies getting elements
      public static get(id : string, getBy: string, type : string){

        let e = this.getElement(id,getBy);

        switch(type){

            case 'click':
            e.click();
            return;

            case 'text':
            return e.getText();
        }

      }

      public static getElement(id: string, getBy : string){

        switch(getBy){

            case 'id':
            return element(by.id(id));
            case 'css':
            return element(by.css(id));
            case 'name':
            return element(by.name(id));
            case 'xpath': 
            return element(by.xpath(id));
            case 'link':
            return element(by.linkText(id));
            case 'button':
            return element(by.buttonText(id));
           }

      }

      public static getElements(id: string, getBy : string){

        switch(getBy){

            case 'id':
            return element.all(by.id(id));
            case 'css':
            return element.all(by.css(id));
            case 'name':
            return element.all(by.name(id));
    
           }

      }


}