/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace dufuna.model {
    export class CuttingSpecification {
        /*private*/ label: string;

        /*private*/ length: number;

        /*private*/ quantity: number;

        public getLabel(): string {
            return this.label;
        }

        public setLabel(label: string) {
            this.label = label;
        }

        public getLength(): number {
            return this.length;
        }

        public setLength(length: number) {
            this.length = length;
        }

        public getQuantity(): number {
            return this.quantity;
        }

        public setQuantity(quantity: number) {
            this.quantity = quantity;
        }

        constructor() {
            if (this.label === undefined) { this.label = null; }
            if (this.length === undefined) { this.length = 0; }
            if (this.quantity === undefined) { this.quantity = 0; }
        }
    }
    CuttingSpecification["__class"] = "dufuna.model.CuttingSpecification";

}

