"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var sp_1 = require("@pnp/sp");
var SharePointService = (function () {
    function SharePointService() {
    }
    SharePointService.prototype.getSiteTitle = function () {
        return rxjs_1.from(sp_1.sp.web.get());
    };
    SharePointService = __decorate([
        core_1.Injectable()
    ], SharePointService);
    return SharePointService;
}());
exports.SharePointService = SharePointService;

//# sourceMappingURL=sharePoint.service.js.map
