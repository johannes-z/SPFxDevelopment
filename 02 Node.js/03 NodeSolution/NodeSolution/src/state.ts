import { SPUtil } from "./util";

export class State {
  util: SPUtil;

  constructor() {
    this.util = new SPUtil();
  }

  init() {
    console.log("Initializing State");
  }
}
