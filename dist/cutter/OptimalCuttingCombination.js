"use strict";
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var dufuna;
(function (dufuna) {
    var cutter;
    (function (cutter) {
        var OptimalCuttingCombination = /** @class */ (function () {
            function OptimalCuttingCombination(stockLength) {
                if (this.stockLength === undefined) {
                    this.stockLength = 0;
                }
                if (this.partLengths === undefined) {
                    this.partLengths = null;
                }
                if (this.cuttingCombinations === undefined) {
                    this.cuttingCombinations = null;
                }
                if (this.waste === undefined) {
                    this.waste = 0;
                }
                this.stockLength = stockLength;
                this.waste = stockLength;
                this.cuttingCombinations = ({});
                this.partLengths = ([]);
            }
            OptimalCuttingCombination.prototype.cutNextPart = function (partLength) {
                if (!this.isCutFeasible(partLength)) {
                    return false;
                }
                var noOfPartLength = (function (m, k) { if (m.entries == null)
                    m.entries = []; for (var i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        return m.entries[i].value;
                    } return null; })(this.cuttingCombinations, partLength);
                if (noOfPartLength == null) {
                    noOfPartLength = 0;
                }
                noOfPartLength += 1;
                /* put */ (function (m, k, v) { if (m.entries == null)
                    m.entries = []; for (var i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        m.entries[i].value = v;
                        return;
                    } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(this.cuttingCombinations, partLength, noOfPartLength);
                /* add */ (this.partLengths.push(partLength) > 0);
                this.waste = this.waste - partLength;
                return true;
            };
            OptimalCuttingCombination.prototype.isCutFeasible = function (partLength) {
                return this.waste >= partLength;
            };
            OptimalCuttingCombination.prototype.swapCut = function (newCut, oldCut) {
                this.reverseCut(oldCut);
                this.cutNextPart(newCut);
            };
            OptimalCuttingCombination.prototype.swapSingleCutForMany = function (newCuts, currentCut) {
                this.reverseCut(currentCut);
                for (var index = 0; index < newCuts.length; index++) {
                    var newCut = newCuts[index];
                    {
                        this.cutNextPart(newCut);
                    }
                }
            };
            OptimalCuttingCombination.prototype.reverseCut = function (currentCut) {
                var noOfPartLength = (function (m, k) { if (m.entries == null)
                    m.entries = []; for (var i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        return m.entries[i].value;
                    } return null; })(this.cuttingCombinations, currentCut);
                noOfPartLength -= 1;
                /* put */ (function (m, k, v) { if (m.entries == null)
                    m.entries = []; for (var i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        m.entries[i].value = v;
                        return;
                    } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(this.cuttingCombinations, currentCut, noOfPartLength);
                /* remove */ (function (a) { var index = a.indexOf(currentCut); if (index >= 0) {
                    a.splice(index, 1);
                    return true;
                }
                else {
                    return false;
                } })(this.partLengths);
                this.waste = this.waste + currentCut;
            };
            OptimalCuttingCombination.prototype.swapManyCutForSingleCut = function (newCut, currentCut) {
                for (var index = 0; index < currentCut.length; index++) {
                    var oldCut = currentCut[index];
                    {
                        this.reverseCut(oldCut);
                    }
                }
                this.cutNextPart(newCut);
            };
            OptimalCuttingCombination.prototype.getStockLength = function () {
                return this.stockLength;
            };
            OptimalCuttingCombination.prototype.getPartLengths = function () {
                /* sort */ this.partLengths.sort();
                return this.partLengths;
            };
            OptimalCuttingCombination.prototype.getWaste = function () {
                return this.waste;
            };
            OptimalCuttingCombination.prototype.getCuttingCombinations = function () {
                return this.cuttingCombinations;
            };
            OptimalCuttingCombination.prototype.getCopy = function () {
                var copy = new OptimalCuttingCombination(this.stockLength);
                copy.waste = this.waste;
                /* addAll */ (function (l1, l2) { return l1.push.apply(l1, l2); })(copy.partLengths, this.partLengths);
                {
                    var array = /* keySet */ (function (m) { var r = []; if (m.entries == null)
                        m.entries = []; for (var i = 0; i < m.entries.length; i++)
                        r.push(m.entries[i].key); return r; })(this.cuttingCombinations);
                    for (var index = 0; index < array.length; index++) {
                        var key = array[index];
                        {
                            var noOfCutForPart = (function (m, k) { if (m.entries == null)
                                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                    return m.entries[i].value;
                                } return null; })(this.cuttingCombinations, key);
                            /* put */ (function (m, k, v) { if (m.entries == null)
                                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                    m.entries[i].value = v;
                                    return;
                                } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(copy.cuttingCombinations, key, noOfCutForPart);
                        }
                    }
                }
                return copy;
            };
            OptimalCuttingCombination.prototype.toString = function () {
                var _this = this;
                var cutCombinationSummary = { str: "", toString: function () { return this.str; } };
                /* append */ (function (sb) { sb.str += "\n"; return sb; })(/* append */ (function (sb) { sb.str += _this.stockLength; return sb; })(/* append */ (function (sb) { sb.str += "Stock Length::"; return sb; })(cutCombinationSummary)));
                /* append */ (function (sb) { sb.str += "[ "; return sb; })(/* append */ (function (sb) { sb.str += "Cut Lengths::"; return sb; })(cutCombinationSummary));
                var _loop_1 = function (index) {
                    var partLength = this_1.partLengths[index];
                    {
                        /* append */ (function (sb) { sb.str += partLength; return sb; })(cutCombinationSummary);
                        /* append */ (function (sb) { sb.str += ", "; return sb; })(cutCombinationSummary);
                    }
                };
                var this_1 = this;
                for (var index = 0; index < this.partLengths.length; index++) {
                    _loop_1(index);
                }
                /* append */ (function (sb) { sb.str += "\n"; return sb; })(/* append */ (function (sb) { sb.str += "]"; return sb; })(cutCombinationSummary));
                /* append */ (function (sb) { sb.str += "\n"; return sb; })(/* append */ (function (sb) { sb.str += _this.waste; return sb; })(/* append */ (function (sb) { sb.str += "Waste::"; return sb; })(cutCombinationSummary)));
                return /* toString */ cutCombinationSummary.str;
            };
            return OptimalCuttingCombination;
        }());
        cutter.OptimalCuttingCombination = OptimalCuttingCombination;
        OptimalCuttingCombination["__class"] = "dufuna.cutter.OptimalCuttingCombination";
    })(cutter = dufuna.cutter || (dufuna.cutter = {}));
})(dufuna || (dufuna = {}));
