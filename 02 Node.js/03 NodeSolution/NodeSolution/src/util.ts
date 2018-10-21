import { Promise } from "es6-promise";
import * as $ from "jquery";
import { sp } from "@pnp/sp";

export class SPUtil {
  private baseUrl: string;

  constructor() {
    let context: SP.ClientContext = SP.ClientContext.get_current();
    this.baseUrl = context.get_url();
  }

  log() {
    console.log("hello word logged from SPUtil");
  }

  getWebTitleCSOM(): Promise<string> {
    console.log("Executing CSOM");
    //wrapping call in Promise - not necessary but nicer to use
    return new Promise<string>((resolve, reject) => {
      let context: SP.ClientContext = new SP.ClientContext(this.baseUrl);
      let web: SP.Web = context.get_web();
      context.load(web);
      context.executeQueryAsync(
        () => {
          resolve(web.get_title());
        },
        (sender, args) => {
          console.log("Request failed. " + args.get_message());
          reject("Err happened - see console for details");
        }
      );
    });
  }

  getWebTitleREST() {
    console.log("executing rest");
    let qry = this.baseUrl + "/_api/web/title";

    $.ajax({
      type: "GET",
      url: qry,
      dataType: "json",
      headers: {
        accept: "application/json;odata=verbose"
      }
    })
      .then(data => {
        console.log(`Web Title is: ${data.d.Title}`);
      })
      .fail(err => {
        console.log(err);
      });
  }

  getNewsItems(): Promise<NewsEntry[]> {
    let qry = `${this.baseUrl}/_api/web/lists/getbytitle('News')/items`;
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "GET",
        url: qry,
        dataType: "json",
        headers: {
          accept: "application/json;odata=verbose",
          "content-type": "application/json;odata=verbose"
        }
      })
        .then(data => {
          resolve(<NewsEntry[]>data.d.results);
        })
        .fail(err => {
          reject(err);
        });
    });
  }

  getListItemsPnP() {
    let list = sp.web.lists.getByTitle("News");

    list.items
      .get()
      .then(function(items) {
        console.log("Items received using PnP");
        for (let item of items) {
          for (var prop in item) {
            console.log(prop + ": " + item[prop]);
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
