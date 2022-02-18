/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace dufuna.exceptions {
    export class CuttingStockOptimizationException extends Error {
        /*private*/ errorCode: number;

        /*private*/ errorType: string;

        /*private*/ errorDescription: string;

        public constructor(errorCode?: any, errorType?: any, errorDescription?: any) {
            if (((typeof errorCode === 'number') || errorCode === null) && ((typeof errorType === 'string') || errorType === null) && ((typeof errorDescription === 'string') || errorDescription === null)) {
                let __args = arguments;
                super();
                if (this.errorCode === undefined) { this.errorCode = 0; } 
                if (this.errorType === undefined) { this.errorType = null; } 
                if (this.errorDescription === undefined) { this.errorDescription = null; } 
                this.errorCode = errorCode;
                this.errorType = errorType;
                this.errorDescription = errorDescription;
            } else if (((typeof errorCode === 'number') || errorCode === null) && errorType === undefined && errorDescription === undefined) {
                let __args = arguments;
                super();
                if (this.errorCode === undefined) { this.errorCode = 0; } 
                if (this.errorType === undefined) { this.errorType = null; } 
                if (this.errorDescription === undefined) { this.errorDescription = null; } 
                this.errorCode = errorCode;
            } else if (errorCode === undefined && errorType === undefined && errorDescription === undefined) {
                let __args = arguments;
                super();
                if (this.errorCode === undefined) { this.errorCode = 0; } 
                if (this.errorType === undefined) { this.errorType = null; } 
                if (this.errorDescription === undefined) { this.errorDescription = null; } 
            } else throw new Error('invalid overload');
        }

        public getErrorCode(): number {
            return this.errorCode;
        }

        public setErrorCode(errorCode: number) {
            this.errorCode = errorCode;
        }

        public getErrorDescription(): string {
            return this.errorDescription;
        }

        public setErrorDescription(errorDescription: string) {
            this.errorDescription = errorDescription;
        }
    }
    CuttingStockOptimizationException["__class"] = "dufuna.exceptions.CuttingStockOptimizationException";

}

