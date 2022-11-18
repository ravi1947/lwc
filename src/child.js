import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api
  label = "I am child";

  @api
  nameChange(strange){
    this.label=strange;
  }
}
