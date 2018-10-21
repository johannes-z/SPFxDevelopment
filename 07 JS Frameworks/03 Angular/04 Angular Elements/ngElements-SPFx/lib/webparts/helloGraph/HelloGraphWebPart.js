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
var strings = require("HelloGraphWebPartStrings");
require("@webcomponents/custom-elements/src/native-shim");
require("core-js/es7/reflect");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var sp_client_preview_1 = require("@microsoft/sp-client-preview");
var HelloGraphWebPart = (function (_super) {
    __extends(HelloGraphWebPart, _super);
    function HelloGraphWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloGraphWebPart.prototype.render = function () {
        var _this = this;
        if (!this.renderedOnce) {
            var client_1 = this.context.serviceScope.consume(sp_client_preview_1.MSGraphClient.serviceKey);
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule, { ngZone: 'noop' })
                .then(function () {
                var ElementGraphHelloWorld = customElements.get("hello-graph");
                var element = new ElementGraphHelloWorld();
                element.client = client_1;
                _this.domElement.appendChild(element);
            });
        }
    };
    Object.defineProperty(HelloGraphWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HelloGraphWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return HelloGraphWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = HelloGraphWebPart;

//# sourceMappingURL=HelloGraphWebPart.js.map
