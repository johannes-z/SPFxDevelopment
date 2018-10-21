"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var es6_promise_1 = require("es6-promise");
var $ = require("jquery");
var SPUtil = /** @class */ (function () {
    function SPUtil() {
    }
    SPUtil.prototype.log = function () {
        console.log("hello word logged from SPUtil");
    };
    SPUtil.getWebTitleCSOM = function (url) {
        console.log("Executing CSOM");
        //wrapping call in Promise - not necessary but nicer to use
        return new es6_promise_1.Promise(function (resolve, reject) {
            var context = new SP.ClientContext(url);
            var web = context.get_web();
            context.load(web);
            context.executeQueryAsync(function () {
                resolve(web.get_title());
            }, function (sender, args) {
                console.log("Request failed. " + args.get_message());
                reject("Err happened - see console for details");
            });
        });
    };
    SPUtil.getWebTitleREST = function (url) {
        console.log("executing rest");
        var qry = url + "/_api/web/title";
        $.ajax({
            type: "GET",
            url: qry,
            dataType: "json",
            headers: {
                accept: "application/json;odata=verbose",
                "content-type": "application/json;odata=verbose"
            }
        })
            .then(function (data) {
            console.log("Web Title received by REST is: " + data.d.response);
        })
            .fail(function (err) {
            console.log(err);
        });
    };
    SPUtil.getNewsItems = function () {
        var url = _spPageContextInfo.webAbsoluteUrl;
        var qry = "http://sp2016/_api/web/lists/getbytitle('News')/items";
        return new es6_promise_1.Promise(function (resolve, reject) {
            $.ajax({
                type: "GET",
                url: qry,
                dataType: "json",
                headers: {
                    accept: "application/json;odata=verbose",
                    "content-type": "application/json;odata=verbose"
                }
            })
                .then(function (data) {
                resolve(data.d.results);
            })
                .fail(function (err) {
                reject(err);
            });
        });
    };
    return SPUtil;
}());
exports.SPUtil = SPUtil;
//# sourceMappingURL=util.js.map