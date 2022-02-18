"use strict";
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var dufuna;
(function (dufuna) {
    var model;
    (function (model) {
        var PossiblePattern = /** @class */ (function () {
            function PossiblePattern(stockLength) {
                if (this.stockLength === undefined) {
                    this.stockLength = 0;
                }
                if (this.waste === undefined) {
                    this.waste = 0;
                }
                this.noOfCuts = ({});
                this.stockLength = stockLength;
                this.waste = stockLength;
            }
            PossiblePattern.prototype.getStockLength = function () {
                return this.stockLength;
            };
            PossiblePattern.prototype.getWaste = function () {
                return this.waste;
            };
            PossiblePattern.prototype.getNoOfCuts = function () {
                return this.noOfCuts;
            };
            PossiblePattern.prototype.addCut = function (cut) {
                if (this.waste > cut) {
                    return false;
                }
                this.waste = this.waste - cut;
                var numberOfCut = (function (m, k) { if (m.entries == null)
                    m.entries = []; for (var i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        return m.entries[i].value;
                    } return null; })(this.noOfCuts, cut);
                if (numberOfCut == null) {
                    numberOfCut = 1;
                }
                else {
                    numberOfCut++;
                }
                /* put */ (function (m, k, v) { if (m.entries == null)
                    m.entries = []; for (var i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        m.entries[i].value = v;
                        return;
                    } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(this.noOfCuts, cut, numberOfCut);
                return true;
            };
            /**
             *
             * @param {*} o
             * @return {boolean}
             */
            PossiblePattern.prototype.equals = function (o) {
                if (this === o)
                    return true;
                if (o == null || this.constructor !== o.constructor)
                    return false;
                var that = o;
                if (this.stockLength !== that.stockLength)
                    return false;
                if (this.waste !== that.waste)
                    return false;
                var localNoOfCutsLength = (function (m) { var r = []; if (m.entries == null)
                    m.entries = []; for (var i = 0; i < m.entries.length; i++)
                    r.push(m.entries[i].key); return r; })(this.noOfCuts).length;
                var localNoOfCutsLengthForThat = (function (m) { var r = []; if (m.entries == null)
                    m.entries = []; for (var i = 0; i < m.entries.length; i++)
                    r.push(m.entries[i].key); return r; })(that.noOfCuts).length;
                if (localNoOfCutsLength !== localNoOfCutsLengthForThat) {
                    return false;
                }
                var thatKeySet = ( /* keySet */(function (m) { var r = []; if (m.entries == null)
                    m.entries = []; for (var i = 0; i < m.entries.length; i++)
                    r.push(m.entries[i].key); return r; })(that.getNoOfCuts()).slice(0));
                {
                    var array = /* keySet */ (function (m) { var r = []; if (m.entries == null)
                        m.entries = []; for (var i = 0; i < m.entries.length; i++)
                        r.push(m.entries[i].key); return r; })(this.noOfCuts);
                    for (var index = 0; index < array.length; index++) {
                        var key = array[index];
                        {
                            if (!(thatKeySet.indexOf((key)) >= 0)) {
                                return false;
                            }
                            var thisValue = (function (m, k) { if (m.entries == null)
                                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                    return m.entries[i].value;
                                } return null; })(this.noOfCuts, key);
                            var thatValue = (function (m, k) { if (m.entries == null)
                                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                    return m.entries[i].value;
                                } return null; })(that.noOfCuts, key);
                            if (thisValue !== thatValue) {
                                return false;
                            }
                        }
                    }
                }
                return true;
            };
            /**
             *
             * @return {number}
             */
            PossiblePattern.prototype.hashCode = function () {
                return /* hash */ 0;
            };
            PossiblePattern.prototype.copy = function () {
                var newPattern = new PossiblePattern(this.stockLength);
                newPattern.waste = this.waste;
                newPattern.getNoOfCuts().putAll(this.noOfCuts);
                return newPattern;
            };
            return PossiblePattern;
        }());
        model.PossiblePattern = PossiblePattern;
        PossiblePattern["__class"] = "dufuna.model.PossiblePattern";
    })(model = dufuna.model || (dufuna.model = {}));
})(dufuna || (dufuna = {}));
