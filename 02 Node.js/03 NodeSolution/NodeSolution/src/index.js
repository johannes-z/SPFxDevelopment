"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var car_1 = require("./car");
var state_1 = require("./state");
var util = new util_1.SPUtil();
util.log();
util_1.SPUtil.getWebTitleCSOM("http://sp2016").then(function (data) {
    return console.log("Web Title received by CSOM is: " + data);
});
util_1.SPUtil.getWebTitleREST("http://sp2016");
util_1.SPUtil.getNewsItems().then(function (data) {
    return console.log("Here are the news items: ", data);
});
function drivePorsche() {
    var porsche = new car_1.Car();
    porsche.drive();
}
//export method to global namespace - otherwise is is not available for function call
window.drive = drivePorsche;
//exporting an object
window.state = new state_1.State();
//# sourceMappingURL=index.js.map