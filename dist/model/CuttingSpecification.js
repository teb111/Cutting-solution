"use strict";
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var dufuna;
(function (dufuna) {
    var model;
    (function (model) {
        var CuttingSpecification = /** @class */ (function () {
            function CuttingSpecification() {
                if (this.label === undefined) {
                    this.label = null;
                }
                if (this.length === undefined) {
                    this.length = 0;
                }
                if (this.quantity === undefined) {
                    this.quantity = 0;
                }
            }
            CuttingSpecification.prototype.getLabel = function () {
                return this.label;
            };
            CuttingSpecification.prototype.setLabel = function (label) {
                this.label = label;
            };
            CuttingSpecification.prototype.getLength = function () {
                return this.length;
            };
            CuttingSpecification.prototype.setLength = function (length) {
                this.length = length;
            };
            CuttingSpecification.prototype.getQuantity = function () {
                return this.quantity;
            };
            CuttingSpecification.prototype.setQuantity = function (quantity) {
                this.quantity = quantity;
            };
            return CuttingSpecification;
        }());
        model.CuttingSpecification = CuttingSpecification;
        CuttingSpecification["__class"] = "dufuna.model.CuttingSpecification";
    })(model = dufuna.model || (dufuna.model = {}));
})(dufuna || (dufuna = {}));
