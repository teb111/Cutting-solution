/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace dufuna.model {
    export class CuttingSolution {
        /*private*/ stock: dufuna.model.CuttingSpecification;

        /*private*/ requiredParts: Array<dufuna.model.CuttingSpecification>;

        public constructor(stock: dufuna.model.CuttingSpecification, requiredParts: Array<dufuna.model.CuttingSpecification>) {
            if (this.stock === undefined) { this.stock = null; }
            if (this.requiredParts === undefined) { this.requiredParts = null; }
            this.stock = stock;
            this.requiredParts = requiredParts;
        }

        public getStock(): dufuna.model.CuttingSpecification {
            return this.stock;
        }

        public getRequiredParts(): Array<dufuna.model.CuttingSpecification> {
            return this.requiredParts;
        }
    }
    CuttingSolution["__class"] = "dufuna.model.CuttingSolution";

}

