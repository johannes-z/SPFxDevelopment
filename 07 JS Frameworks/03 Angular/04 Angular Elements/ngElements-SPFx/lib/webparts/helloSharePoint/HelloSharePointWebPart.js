"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var strings = require("HelloSharePointWebPartStrings");
require("@webcomponents/custom-elements/src/native-shim");
require("core-js/es7/reflect");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var HelloSharePointWebPart = (function (_super) {
    __extends(HelloSharePointWebPart, _super);
    function HelloSharePointWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloSharePointWebPart.prototype.render = function () {
        var _this = this;
        platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule, { ngZone: 'noop' }).then(function () {
            _this.domElement.innerHTML = "<hello-sharepoint site-url=\"" + _this.context.pageContext.web.absoluteUrl + "\"></hello-sharepoint>";
        });
    };
    Object.defineProperty(HelloSharePointWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HelloSharePointWebPart.prototype.getPropertyPaneConfiguration = function () {
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
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return HelloSharePointWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = HelloSharePointWebPart;

//# sourceMappingURL=HelloSharePointWebPart.js.map
