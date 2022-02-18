/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace dufuna.model {
    export class PossiblePattern {
        /*private*/ stockLength: number;

        /*private*/ waste: number;

        /*private*/ noOfCuts: any;

        public constructor(stockLength: number) {
            if (this.stockLength === undefined) { this.stockLength = 0; }
            if (this.waste === undefined) { this.waste = 0; }
            this.noOfCuts = <any>({});
            this.stockLength = stockLength;
            this.waste = stockLength;
        }

        public getStockLength(): number {
            return this.stockLength;
        }

        public getWaste(): number {
            return this.waste;
        }

        public getNoOfCuts(): any {
            return this.noOfCuts;
        }

        public addCut(cut: number): boolean {
            if (this.waste > cut){
                return false;
            }
            this.waste = this.waste - cut;
            let numberOfCut: number = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.noOfCuts, cut);
            if (numberOfCut == null){
                numberOfCut = 1;
            } else {
                numberOfCut++;
            }
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>this.noOfCuts, cut, numberOfCut);
            return true;
        }

        /**
         * 
         * @param {*} o
         * @return {boolean}
         */
        public equals(o: any): boolean {
            if (this === o)return true;
            if (o == null || (<any>this.constructor) !== (<any>o.constructor))return false;
            const that: PossiblePattern = <PossiblePattern>o;
            if (this.stockLength !== that.stockLength)return false;
            if (this.waste !== that.waste)return false;
            const localNoOfCutsLength: number = /* size */(<number>/* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>this.noOfCuts).length);
            const localNoOfCutsLengthForThat: number = /* size */(<number>/* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>that.noOfCuts).length);
            if (localNoOfCutsLength !== localNoOfCutsLengthForThat){
                return false;
            }
            const thatKeySet: Array<number> = <any>(/* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>that.getNoOfCuts()).slice(0));
            {
                let array = /* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>this.noOfCuts);
                for(let index = 0; index < array.length; index++) {
                    let key = array[index];
                    {
                        if (!/* contains */(thatKeySet.indexOf(<any>(key)) >= 0)){
                            return false;
                        }
                        const thisValue: number = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.noOfCuts, key);
                        const thatValue: number = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>that.noOfCuts, key);
                        if (thisValue !== thatValue){
                            return false;
                        }
                    }
                }
            }
            return true;
        }

        /**
         * 
         * @return {number}
         */
        public hashCode(): number {
            return /* hash */0;
        }

        public copy(): PossiblePattern {
            const newPattern: PossiblePattern = new PossiblePattern(this.stockLength);
            newPattern.waste = this.waste;
            newPattern.getNoOfCuts().putAll(this.noOfCuts);
            return newPattern;
        }
    }
    PossiblePattern["__class"] = "dufuna.model.PossiblePattern";

}

