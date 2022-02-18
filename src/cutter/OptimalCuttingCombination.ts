/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace dufuna.cutter {
    export class OptimalCuttingCombination {
        /*private*/ stockLength: number;

        /*private*/ partLengths: Array<number>;

        /*private*/ cuttingCombinations: any;

        /*private*/ waste: number;

        public constructor(stockLength: number) {
            if (this.stockLength === undefined) { this.stockLength = 0; }
            if (this.partLengths === undefined) { this.partLengths = null; }
            if (this.cuttingCombinations === undefined) { this.cuttingCombinations = null; }
            if (this.waste === undefined) { this.waste = 0; }
            this.stockLength = stockLength;
            this.waste = stockLength;
            this.cuttingCombinations = <any>({});
            this.partLengths = <any>([]);
        }

        public cutNextPart(partLength: number): boolean {
            if (!this.isCutFeasible(partLength)){
                return false;
            }
            let noOfPartLength: number = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.cuttingCombinations, partLength);
            if (noOfPartLength == null){
                noOfPartLength = 0;
            }
            noOfPartLength += 1;
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>this.cuttingCombinations, partLength, noOfPartLength);
            /* add */(this.partLengths.push(partLength)>0);
            this.waste = this.waste - partLength;
            return true;
        }

        public isCutFeasible(partLength: number): boolean {
            return this.waste >= partLength;
        }

        public swapCut(newCut: number, oldCut: number) {
            this.reverseCut(oldCut);
            this.cutNextPart(newCut);
        }

        public swapSingleCutForMany(newCuts: Array<number>, currentCut: number) {
            this.reverseCut(currentCut);
            for(let index = 0; index < newCuts.length; index++) {
                let newCut = newCuts[index];
                {
                    this.cutNextPart(newCut);
                }
            }
        }

        public reverseCut(currentCut: number) {
            let noOfPartLength: number = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.cuttingCombinations, currentCut);
            noOfPartLength -= 1;
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>this.cuttingCombinations, currentCut, noOfPartLength);
            /* remove */(a => { let index = a.indexOf(currentCut); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.partLengths);
            this.waste = this.waste + currentCut;
        }

        public swapManyCutForSingleCut(newCut: number, currentCut: Array<number>) {
            for(let index = 0; index < currentCut.length; index++) {
                let oldCut = currentCut[index];
                {
                    this.reverseCut(oldCut);
                }
            }
            this.cutNextPart(newCut);
        }

        public getStockLength(): number {
            return this.stockLength;
        }

        public getPartLengths(): Array<number> {
            /* sort */this.partLengths.sort();
            return this.partLengths;
        }

        public getWaste(): number {
            return this.waste;
        }

        public getCuttingCombinations(): any {
            return this.cuttingCombinations;
        }

        public getCopy(): OptimalCuttingCombination {
            const copy: OptimalCuttingCombination = new OptimalCuttingCombination(this.stockLength);
            copy.waste = this.waste;
            /* addAll */((l1, l2) => l1.push.apply(l1, l2))(copy.partLengths, this.partLengths);
            {
                let array = /* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>this.cuttingCombinations);
                for(let index = 0; index < array.length; index++) {
                    let key = array[index];
                    {
                        const noOfCutForPart: number = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.cuttingCombinations, key);
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>copy.cuttingCombinations, key, noOfCutForPart);
                    }
                }
            }
            return copy;
        }

        public toString(): string {
            const cutCombinationSummary: { str: string, toString: Function } = { str: "", toString: function() { return this.str; } };
            /* append */(sb => { sb.str += <any>"\n"; return sb; })(/* append */(sb => { sb.str += <any>this.stockLength; return sb; })(/* append */(sb => { sb.str += <any>"Stock Length::"; return sb; })(cutCombinationSummary)));
            /* append */(sb => { sb.str += <any>"[ "; return sb; })(/* append */(sb => { sb.str += <any>"Cut Lengths::"; return sb; })(cutCombinationSummary));
            for(let index = 0; index < this.partLengths.length; index++) {
                let partLength = this.partLengths[index];
                {
                    /* append */(sb => { sb.str += <any>partLength; return sb; })(cutCombinationSummary);
                    /* append */(sb => { sb.str += <any>", "; return sb; })(cutCombinationSummary);
                }
            }
            /* append */(sb => { sb.str += <any>"\n"; return sb; })(/* append */(sb => { sb.str += <any>"]"; return sb; })(cutCombinationSummary));
            /* append */(sb => { sb.str += <any>"\n"; return sb; })(/* append */(sb => { sb.str += <any>this.waste; return sb; })(/* append */(sb => { sb.str += <any>"Waste::"; return sb; })(cutCombinationSummary)));
            return /* toString */cutCombinationSummary.str;
        }
    }
    OptimalCuttingCombination["__class"] = "dufuna.cutter.OptimalCuttingCombination";

}

