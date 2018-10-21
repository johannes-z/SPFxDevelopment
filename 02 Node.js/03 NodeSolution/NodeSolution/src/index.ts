import { SPUtil } from "./util";
import { Car } from "./car";
import { State } from "./state";

let spUtil = new SPUtil();
spUtil.log();

spUtil
  .getWebTitleCSOM()
  .then(data => console.log(`Web Title received by CSOM is: ${data}`));

spUtil.getWebTitleREST();

spUtil.getNewsItems().then((entries: NewsEntry[]) => {
  let html = "";
  entries.forEach(entry => (html += `<div>${entry.Title}</div>`));
  let divResult = document.querySelector("#result");
  divResult.innerHTML = html;
});

spUtil.getListItemsPnP();

function drivePorsche() {
  let porsche = new Car();
  porsche.drive();
}

//export method to global namespace - otherwise is is not available for function call
(<any>window).drive = drivePorsche;

//exporting an object
(<any>window).state = new State();
