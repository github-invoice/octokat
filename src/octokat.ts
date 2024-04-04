// github graphQL descriptor: https://github.com/github/docs/blob/main/src/graphql/data/ghec/schema.json
import { Octokit } from '@octokit/core';
import { OctokatGraphql } from './octokatGraphql';

export class Octokat extends Octokit{
    octokatGraphql: OctokatGraphql;
    constructor(token: string) {
        super({ auth: token });
        this.octokatGraphql = new OctokatGraphql(this.graphql);
    }
}