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
var graph_service_1 = require("./graph.service");
var HelloPnPJSGraphComponent = (function () {
    function HelloPnPJSGraphComponent(graphService, cd) {
        this.graphService = graphService;
        this.cd = cd;
    }
    HelloPnPJSGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayName = '...';
        this.graphService
            .getMe()
            .subscribe(function (data) {
            _this.displayName = data.displayName;
            _this.cd.detectChanges();
        });
    };
    HelloPnPJSGraphComponent = __decorate([
        core_1.Component({
            selector: 'hello-pnp-js-graph',
            providers: [graph_service_1.GraphService],
            template: "\n      <div>[Hello PnP JS Graph] My name is: {{ displayName }}</div>\n    "
        }),
        __metadata("design:paramtypes", [graph_service_1.GraphService, core_1.ChangeDetectorRef])
    ], HelloPnPJSGraphComponent);
    return HelloPnPJSGraphComponent;
}());
exports.HelloPnPJSGraphComponent = HelloPnPJSGraphComponent;

//# sourceMappingURL=helloPnPJSGraph.component.js.map
