"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sharePoint_service_1 = require("./sharePoint.service");
var HelloSharePointComponent = (function () {
    function HelloSharePointComponent(sharePointService, cd) {
        this.sharePointService = sharePointService;
        this.cd = cd;
    }
    HelloSharePointComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = '...';
        this.sharePointService
            .getSiteTitle(this.siteUrl)
            .subscribe(function (data) {
            _this.title = data.Title;
            _this.cd.detectChanges();
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HelloSharePointComponent.prototype, "siteUrl", void 0);
    HelloSharePointComponent = __decorate([
        core_1.Component({
            selector: 'hello-sharepoint',
            providers: [sharePoint_service_1.SharePointService],
            template: "\n      <div>[Hello SharePoint] Web title: {{ title }}</div>\n    "
        }),
        __metadata("design:paramtypes", [sharePoint_service_1.SharePointService, core_1.ChangeDetectorRef])
    ], HelloSharePointComponent);
    return HelloSharePointComponent;
}());
exports.HelloSharePointComponent = HelloSharePointComponent;

//# sourceMappingURL=helloSharePoint.component.js.map
