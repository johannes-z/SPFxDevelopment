import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./GraphWpWebPart.module.scss";
import * as strings from "GraphWpWebPartStrings";

import { HttpClientResponse } from "@microsoft/sp-http";
import { IOffice365Group } from "./IGroup";

import { MSGraphClient } from "@microsoft/sp-http";

export interface IGraphWpWebPartProps {
  description: string;
}

export default class GraphWpWebPart extends BaseClientSideWebPart<
  IGraphWpWebPartProps
> {
  public render(): void {
    this.domElement.innerHTML = `
     <div class="${styles.graphWp}">
     <div class="${styles.container}">
     <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${
       styles.row
     }">
       <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
         <span class="ms-font-xl ms-fontColor-white">Welcome to SharePoint!</span>
         <p class="ms-font-l ms-fontColor-white">Customize SharePoint experiences using web parts.</p>
         <p class="ms-font-l ms-fontColor-white">${escape(
           this.properties.description
         )}</p>
         <a href="https://aka.ms/spfx" class="${styles.button}">
           <span class="${styles.label}">Learn more</span>
         </a>
         <p>
         <input id="readGroups" type="button" value="Read Groups"/> 
         </p>
         <div id="spTableContainer" ></div>
       </div>
     </div>
   </div>
 </div>`;
    this.domElement
      .querySelector("#readGroups")
      .addEventListener("click", () => {
        this._readGroups();
      });
  }

  protected _readGroups() {
    // Query for all groups on the tenant using Microsoft Graph.
    this.context.msGraphClientFactory.getClient().then(
      (client: MSGraphClient): void => {
        // From https://github.com/microsoftgraph/msgraph-sdk-javascript sample
        client
          .api("users")
          .version("v1.0")
          .select("displayName,mail,userPrincipalName")
          .get((err, res) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log(res);
          });
      }
    );
  }

  protected _renderTable(items: IOffice365Group[]): void {
    let html: string = "";
    if (items.length <= 0) {
      html = `<p>There are no groups to list...</p>`;
    } else {
      html += `
    <table><tr>
      <th>Display Name</th>
      <th>Mail</th>
      <th>Description</th></tr>`;
      items.forEach((item: IOffice365Group) => {
        html += `
        <tr>
            <td>${item.displayName}</td>
            <td>${item.mail}</td>
            <td>${item.description}</td>
        </tr>`;
      });
      html += `</table>`;
    }
    const tableContainer: Element = this.domElement.querySelector(
      "#spTableContainer"
    );
    tableContainer.innerHTML = html;
    return;
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
