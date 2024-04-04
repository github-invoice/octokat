"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OctokatGraphql = void 0;
const graphQLEndpointMethods_1 = require("./graphQLEndpointMethods");
// import { UpdateProjectV2ItemFieldValueInput } from "./input";
function gen(octokat, obj) {
    const { query, params } = obj.called();
    return octokat.graphql(query, params);
}
class OctokatGraphql {
    constructor(graphql) {
        /*****************
        * GENERATED CODE *
        *****************/
        this.update = (params, output) => gen(this, new graphQLEndpointMethods_1.updateTest(params, output));
        this.graphql = graphql;
    }
}
exports.OctokatGraphql = OctokatGraphql;
