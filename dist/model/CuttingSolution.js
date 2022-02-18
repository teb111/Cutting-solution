"use strict";
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var dufuna;
(function (dufuna) {
    var model;
    (function (model) {
        var CuttingSolution = /** @class */ (function () {
            function CuttingSolution(stock, requiredParts) {
                if (this.stock === undefined) {
                    this.stock = null;
                }
                if (this.requiredParts === undefined) {
                    this.requiredParts = null;
                }
                this.stock = stock;
                this.requiredParts = requiredParts;
            }
            CuttingSolution.prototype.getStock = function () {
                return this.stock;
            };
            CuttingSolution.prototype.getRequiredParts = function () {
                return this.requiredParts;
            };
            return CuttingSolution;
        }());
        model.CuttingSolution = CuttingSolution;
        CuttingSolution["__class"] = "dufuna.model.CuttingSolution";
    })(model = dufuna.model || (dufuna.model = {}));
})(dufuna || (dufuna = {}));
