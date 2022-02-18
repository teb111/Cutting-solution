/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace dufuna.solver {
    export class CuttingStockProblemSolver {
        public solveForSingleStock(stockLength: number, parts: Array<number>) {
            const simplestSolution: Array<dufuna.cutter.OptimalCuttingCombination> = this.executeOptimalCutForList(stockLength, parts);
            const solutionByWaste: any = <any>({});
            for(let index = 0; index < simplestSolution.length; index++) {
                let combi = simplestSolution[index];
                {
                    let wasteLevel: Array<dufuna.cutter.OptimalCuttingCombination> = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>solutionByWaste, combi.getWaste());
                    if (wasteLevel == null){
                        wasteLevel = <any>([]);
                    }
                    /* add */(wasteLevel.push(combi)>0);
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>solutionByWaste, combi.getWaste(), wasteLevel);
                }
            }
        }

        public executeOptimalCutForList(stockLength: number, parts: Array<number>): Array<dufuna.cutter.OptimalCuttingCombination> {
            const optimalCuttingCombinations: Array<dufuna.cutter.OptimalCuttingCombination> = <any>([]);
            const optimalCuts: Array<dufuna.cutter.OptimalCuttingCombination> = <any>([]);
            const subOptimalCuts: Array<dufuna.cutter.OptimalCuttingCombination> = <any>([]);
            const uncutParts: any = <any>({});
            for(let index = 0; index < parts.length; index++) {
                let part = parts[index];
                {
                    let noOfPart: number = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>uncutParts, part);
                    if (noOfPart == null){
                        noOfPart = 0;
                    }
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>uncutParts, part, ++noOfPart);
                }
            }
            const notDone: boolean = true;
            do {{
                const optimalCuttingCombination: dufuna.cutter.OptimalCuttingCombination = this.executeOptimalCutForStock(stockLength, this.getLengths(uncutParts));
                if (optimalCuttingCombination.getWaste() > 0){
                    /* add */(subOptimalCuts.push(optimalCuttingCombination)>0);
                } else {
                    /* add */(optimalCuts.push(optimalCuttingCombination)>0);
                }
                {
                    let array = /* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>optimalCuttingCombination.getCuttingCombinations());
                    for(let index = 0; index < array.length; index++) {
                        let cut = array[index];
                        {
                            const uncutSize: number = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>uncutParts, cut);
                            const currentCuts: number = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>optimalCuttingCombination.getCuttingCombinations(), cut);
                            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>uncutParts, cut, uncutSize - currentCuts);
                        }
                    }
                }
            }} while((!/* isEmpty */(this.getLengths(uncutParts).length == 0)));
            const subOptimalByWasteSize: any = <any>({});
            for(let index = 0; index < subOptimalCuts.length; index++) {
                let optimal = subOptimalCuts[index];
                {
                    const indexOfWaste: number = optimal.getWaste();
                    let occByWaste: Array<dufuna.cutter.OptimalCuttingCombination> = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>subOptimalByWasteSize, indexOfWaste);
                    if (occByWaste == null){
                        occByWaste = <any>([]);
                    }
                    /* add */(occByWaste.push(optimal)>0);
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>subOptimalByWasteSize, indexOfWaste, occByWaste);
                }
            }
            const subOptimalMapKey: Array<number> = <any>(/* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>subOptimalByWasteSize).slice(0));
            const reversed: Array<number> = <any>([]);
            for(let i: number = /* size */(<number>subOptimalMapKey.length) - 1; i >= 0; i--) {{
                /* add */(reversed.push(/* get */subOptimalMapKey[i])>0);
            };}
            /* addAll */((l1, l2) => l1.push.apply(l1, l2))(optimalCuttingCombinations, optimalCuts);
            /* addAll */((l1, l2) => l1.push.apply(l1, l2))(optimalCuttingCombinations, subOptimalCuts);
            return optimalCuttingCombinations;
        }

        /*private*/ getLengths(uncutParts: any): Array<number> {
            const lengths: Array<number> = <any>([]);
            {
                let array = /* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>uncutParts);
                for(let index = 0; index < array.length; index++) {
                    let key = array[index];
                    {
                        const noOfParts: number = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>uncutParts, key);
                        if (noOfParts > 0){
                            for(let i: number = 0; i < noOfParts; i++) {{
                                /* add */(lengths.push(key)>0);
                            };}
                        }
                    }
                }
            }
            return lengths;
        }

        public executeOptimalCutForStock(stockLength: number, lengths: Array<number>): dufuna.cutter.OptimalCuttingCombination {
            const optimalCuttingCombination: dufuna.cutter.OptimalCuttingCombination = new dufuna.cutter.OptimalCuttingCombination(stockLength);
            if (/* isEmpty */(lengths.length == 0)){
                return null;
            }
            /* sort */lengths.sort();
            const uncut: Array<number> = <any>([]);
            for(let index = 0; index < lengths.length; index++) {
                let length = lengths[index];
                {
                    const cutResult: boolean = optimalCuttingCombination.cutNextPart(length);
                    if (!cutResult){
                        let cutToSwitch: number = 0;
                        {
                            let array = optimalCuttingCombination.getPartLengths();
                            for(let index1 = 0; index1 < array.length; index1++) {
                                let cut = array[index1];
                                {
                                    const wasteFromSwap: number = length - cut;
                                    if (wasteFromSwap > 0 && wasteFromSwap < optimalCuttingCombination.getWaste()){
                                        cutToSwitch = cut;
                                        break;
                                    }
                                }
                            }
                        }
                        if (cutToSwitch === 0){
                            /* add */(uncut.push(length)>0);
                        } else {
                            optimalCuttingCombination.swapCut(length, cutToSwitch);
                            /* add */(uncut.push(cutToSwitch)>0);
                        }
                    }
                    if (optimalCuttingCombination.getWaste() === 0){
                        return optimalCuttingCombination;
                    }
                }
            }
            return optimalCuttingCombination;
        }

        /*private*/ getReplaceableCut(stockSize: number, optimalCuttingCombination: dufuna.cutter.OptimalCuttingCombination): Array<number> {
            const replaceableCut: Array<number> = <any>([]);
            const newCutParts: Array<number> = <any>([]);
            /* addAll */((l1, l2) => l1.push.apply(l1, l2))(newCutParts, optimalCuttingCombination.getPartLengths());
            const optCut: dufuna.cutter.OptimalCuttingCombination = this.executeOptimalCutForStock(stockSize, newCutParts);
            if (optCut.getWaste() <= optimalCuttingCombination.getWaste()){
                /* addAll */((l1, l2) => l1.push.apply(l1, l2))(replaceableCut, optCut.getPartLengths());
                optimalCuttingCombination.swapManyCutForSingleCut(stockSize, replaceableCut);
            }
            return replaceableCut;
        }
    }
    CuttingStockProblemSolver["__class"] = "dufuna.solver.CuttingStockProblemSolver";

}

