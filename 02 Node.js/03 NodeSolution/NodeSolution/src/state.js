"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var State = /** @class */ (function () {
    function State() {
        this.util = new util_1.SPUtil();
    }
    State.prototype.init = function () {
        console.log("Initializing State");
    };
    return State;
}());
exports.State = State;
//# sourceMappingURL=state.js.map