"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTest = exports.Methods = void 0;
const generateGraphQLQuery_1 = require("./generateGraphQLQuery");
class Methods {
}
exports.Methods = Methods;
class updateTest extends Methods {
    constructor(input, output) {
        super();
        this.input = input;
        this.output = output;
    }
    called() {
        const query = (0, generateGraphQLQuery_1.generateGraphQLQuery)(this.output);
        const params = this.input;
        return { query, params };
    }
}
exports.updateTest = updateTest;
