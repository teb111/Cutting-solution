"use strict";
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var dufuna;
(function (dufuna) {
    var solver;
    (function (solver) {
        var CuttingStockProblemSolver = /** @class */ (function () {
            function CuttingStockProblemSolver() {
            }
            CuttingStockProblemSolver.prototype.solveForSingleStock = function (stockLength, parts) {
                var simplestSolution = this.executeOptimalCutForList(stockLength, parts);
                var solutionByWaste = ({});
                for (var index = 0; index < simplestSolution.length; index++) {
                    var combi = simplestSolution[index];
                    {
                        var wasteLevel = (function (m, k) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                return m.entries[i].value;
                            } return null; })(solutionByWaste, combi.getWaste());
                        if (wasteLevel == null) {
                            wasteLevel = ([]);
                        }
                        /* add */ (wasteLevel.push(combi) > 0);
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(solutionByWaste, combi.getWaste(), wasteLevel);
                    }
                }
            };
            CuttingStockProblemSolver.prototype.executeOptimalCutForList = function (stockLength, parts) {
                var optimalCuttingCombinations = ([]);
                var optimalCuts = ([]);
                var subOptimalCuts = ([]);
                var uncutParts = ({});
                for (var index = 0; index < parts.length; index++) {
                    var part = parts[index];
                    {
                        var noOfPart = (function (m, k) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                return m.entries[i].value;
                            } return null; })(uncutParts, part);
                        if (noOfPart == null) {
                            noOfPart = 0;
                        }
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(uncutParts, part, ++noOfPart);
                    }
                }
                var notDone = true;
                do {
                    {
                        var optimalCuttingCombination = this.executeOptimalCutForStock(stockLength, this.getLengths(uncutParts));
                        if (optimalCuttingCombination.getWaste() > 0) {
                            /* add */ (subOptimalCuts.push(optimalCuttingCombination) > 0);
                        }
                        else {
                            /* add */ (optimalCuts.push(optimalCuttingCombination) > 0);
                        }
                        {
                            var array = /* keySet */ (function (m) { var r = []; if (m.entries == null)
                                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                r.push(m.entries[i].key); return r; })(optimalCuttingCombination.getCuttingCombinations());
                            for (var index = 0; index < array.length; index++) {
                                var cut = array[index];
                                {
                                    var uncutSize = (function (m, k) { if (m.entries == null)
                                        m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                        if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                            return m.entries[i].value;
                                        } return null; })(uncutParts, cut);
                                    var currentCuts = (function (m, k) { if (m.entries == null)
                                        m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                        if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                            return m.entries[i].value;
                                        } return null; })(optimalCuttingCombination.getCuttingCombinations(), cut);
                                    /* put */ (function (m, k, v) { if (m.entries == null)
                                        m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                        if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                            m.entries[i].value = v;
                                            return;
                                        } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(uncutParts, cut, uncutSize - currentCuts);
                                }
                            }
                        }
                    }
                } while ((!(this.getLengths(uncutParts).length == 0)));
                var subOptimalByWasteSize = ({});
                for (var index = 0; index < subOptimalCuts.length; index++) {
                    var optimal = subOptimalCuts[index];
                    {
                        var indexOfWaste = optimal.getWaste();
                        var occByWaste = (function (m, k) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                return m.entries[i].value;
                            } return null; })(subOptimalByWasteSize, indexOfWaste);
                        if (occByWaste == null) {
                            occByWaste = ([]);
                        }
                        /* add */ (occByWaste.push(optimal) > 0);
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(subOptimalByWasteSize, indexOfWaste, occByWaste);
                    }
                }
                var subOptimalMapKey = ( /* keySet */(function (m) { var r = []; if (m.entries == null)
                    m.entries = []; for (var i = 0; i < m.entries.length; i++)
                    r.push(m.entries[i].key); return r; })(subOptimalByWasteSize).slice(0));
                var reversed = ([]);
                for (var i = subOptimalMapKey.length - 1; i >= 0; i--) {
                    {
                        /* add */ (reversed.push(/* get */ subOptimalMapKey[i]) > 0);
                    }
                    ;
                }
                /* addAll */ (function (l1, l2) { return l1.push.apply(l1, l2); })(optimalCuttingCombinations, optimalCuts);
                /* addAll */ (function (l1, l2) { return l1.push.apply(l1, l2); })(optimalCuttingCombinations, subOptimalCuts);
                return optimalCuttingCombinations;
            };
            /*private*/ CuttingStockProblemSolver.prototype.getLengths = function (uncutParts) {
                var lengths = ([]);
                {
                    var array = /* keySet */ (function (m) { var r = []; if (m.entries == null)
                        m.entries = []; for (var i = 0; i < m.entries.length; i++)
                        r.push(m.entries[i].key); return r; })(uncutParts);
                    for (var index = 0; index < array.length; index++) {
                        var key = array[index];
                        {
                            var noOfParts = (function (m, k) { if (m.entries == null)
                                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                    return m.entries[i].value;
                                } return null; })(uncutParts, key);
                            if (noOfParts > 0) {
                                for (var i = 0; i < noOfParts; i++) {
                                    {
                                        /* add */ (lengths.push(key) > 0);
                                    }
                                    ;
                                }
                            }
                        }
                    }
                }
                return lengths;
            };
            CuttingStockProblemSolver.prototype.executeOptimalCutForStock = function (stockLength, lengths) {
                var optimalCuttingCombination = new dufuna.cutter.OptimalCuttingCombination(stockLength);
                if ( /* isEmpty */(lengths.length == 0)) {
                    return null;
                }
                /* sort */ lengths.sort();
                var uncut = ([]);
                for (var index = 0; index < lengths.length; index++) {
                    var length_1 = lengths[index];
                    {
                        var cutResult = optimalCuttingCombination.cutNextPart(length_1);
                        if (!cutResult) {
                            var cutToSwitch = 0;
                            {
                                var array = optimalCuttingCombination.getPartLengths();
                                for (var index1 = 0; index1 < array.length; index1++) {
                                    var cut = array[index1];
                                    {
                                        var wasteFromSwap = length_1 - cut;
                                        if (wasteFromSwap > 0 && wasteFromSwap < optimalCuttingCombination.getWaste()) {
                                            cutToSwitch = cut;
                                            break;
                                        }
                                    }
                                }
                            }
                            if (cutToSwitch === 0) {
                                /* add */ (uncut.push(length_1) > 0);
                            }
                            else {
                                optimalCuttingCombination.swapCut(length_1, cutToSwitch);
                                /* add */ (uncut.push(cutToSwitch) > 0);
                            }
                        }
                        if (optimalCuttingCombination.getWaste() === 0) {
                            return optimalCuttingCombination;
                        }
                    }
                }
                return optimalCuttingCombination;
            };
            /*private*/ CuttingStockProblemSolver.prototype.getReplaceableCut = function (stockSize, optimalCuttingCombination) {
                var replaceableCut = ([]);
                var newCutParts = ([]);
                /* addAll */ (function (l1, l2) { return l1.push.apply(l1, l2); })(newCutParts, optimalCuttingCombination.getPartLengths());
                var optCut = this.executeOptimalCutForStock(stockSize, newCutParts);
                if (optCut.getWaste() <= optimalCuttingCombination.getWaste()) {
                    /* addAll */ (function (l1, l2) { return l1.push.apply(l1, l2); })(replaceableCut, optCut.getPartLengths());
                    optimalCuttingCombination.swapManyCutForSingleCut(stockSize, replaceableCut);
                }
                return replaceableCut;
            };
            return CuttingStockProblemSolver;
        }());
        solver.CuttingStockProblemSolver = CuttingStockProblemSolver;
        CuttingStockProblemSolver["__class"] = "dufuna.solver.CuttingStockProblemSolver";
    })(solver = dufuna.solver || (dufuna.solver = {}));
})(dufuna || (dufuna = {}));
