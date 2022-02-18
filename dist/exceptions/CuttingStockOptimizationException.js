"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var dufuna;
(function (dufuna) {
    var exceptions;
    (function (exceptions) {
        var CuttingStockOptimizationException = /** @class */ (function (_super) {
            __extends(CuttingStockOptimizationException, _super);
            function CuttingStockOptimizationException(errorCode, errorType, errorDescription) {
                var _this = this;
                if (((typeof errorCode === 'number') || errorCode === null) && ((typeof errorType === 'string') || errorType === null) && ((typeof errorDescription === 'string') || errorDescription === null)) {
                    var __args = arguments;
                    _this = _super.call(this) || this;
                    if (_this.errorCode === undefined) {
                        _this.errorCode = 0;
                    }
                    if (_this.errorType === undefined) {
                        _this.errorType = null;
                    }
                    if (_this.errorDescription === undefined) {
                        _this.errorDescription = null;
                    }
                    _this.errorCode = errorCode;
                    _this.errorType = errorType;
                    _this.errorDescription = errorDescription;
                }
                else if (((typeof errorCode === 'number') || errorCode === null) && errorType === undefined && errorDescription === undefined) {
                    var __args = arguments;
                    _this = _super.call(this) || this;
                    if (_this.errorCode === undefined) {
                        _this.errorCode = 0;
                    }
                    if (_this.errorType === undefined) {
                        _this.errorType = null;
                    }
                    if (_this.errorDescription === undefined) {
                        _this.errorDescription = null;
                    }
                    _this.errorCode = errorCode;
                }
                else if (errorCode === undefined && errorType === undefined && errorDescription === undefined) {
                    var __args = arguments;
                    _this = _super.call(this) || this;
                    if (_this.errorCode === undefined) {
                        _this.errorCode = 0;
                    }
                    if (_this.errorType === undefined) {
                        _this.errorType = null;
                    }
                    if (_this.errorDescription === undefined) {
                        _this.errorDescription = null;
                    }
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            CuttingStockOptimizationException.prototype.getErrorCode = function () {
                return this.errorCode;
            };
            CuttingStockOptimizationException.prototype.setErrorCode = function (errorCode) {
                this.errorCode = errorCode;
            };
            CuttingStockOptimizationException.prototype.getErrorDescription = function () {
                return this.errorDescription;
            };
            CuttingStockOptimizationException.prototype.setErrorDescription = function (errorDescription) {
                this.errorDescription = errorDescription;
            };
            return CuttingStockOptimizationException;
        }(Error));
        exceptions.CuttingStockOptimizationException = CuttingStockOptimizationException;
        CuttingStockOptimizationException["__class"] = "dufuna.exceptions.CuttingStockOptimizationException";
    })(exceptions = dufuna.exceptions || (dufuna.exceptions = {}));
})(dufuna || (dufuna = {}));
