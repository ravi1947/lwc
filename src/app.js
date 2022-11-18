import { LightningElement, api } from "lwc";


export default class App extends LightningElement {
  
  privateTitle;

  @api
  get title(){
      return this.privateTitle;
  }

  set title(value){
    this.privateTitle = value.toUpperCase();
    this.setAttribute('title', this.privateTitle);
  }

}
