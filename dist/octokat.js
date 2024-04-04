"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Octokat = void 0;
// github graphQL descriptor: https://github.com/github/docs/blob/main/src/graphql/data/ghec/schema.json
const core_1 = require("@octokit/core");
const octokatGraphql_1 = require("./octokatGraphql");
class Octokat extends core_1.Octokit {
    constructor(token) {
        super({ auth: token });
        this.octokatGraphql = new octokatGraphql_1.OctokatGraphql(this.graphql);
    }
}
exports.Octokat = Octokat;
