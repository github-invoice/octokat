import { generateGraphQLQuery } from './generateGraphQLQuery';

export abstract class Methods {
    abstract called(): {query:string, params:Object};
}

export class updateTest<T extends Object, U> extends Methods{
    input:T;
    output:U;
    constructor(input:T, output:U){
        super();
        this.input = input;
        this.output = output;
    }
    called():{query:string, params:Object}{
        const query = generateGraphQLQuery(this.output);
        const params = this.input;
        return {query, params};
    }
}