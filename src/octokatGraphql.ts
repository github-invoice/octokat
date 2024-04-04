import { updateTest, Methods } from "./graphQLEndpointMethods";
import { UpdateProjectV2ItemFieldValueOutput } from "./output";
// import { UpdateProjectV2ItemFieldValueInput } from "./input";

function gen<Z extends Methods>(octokat:OctokatGraphql, obj:Z):string{
    const {query, params} = obj.called();
    return octokat.graphql(query, params);
}

export class OctokatGraphql{
    // TODO: pass call method in parameter of this
    graphql:Function;
    constructor(graphql:Function){
        this.graphql = graphql;
    }
    /*****************
    * GENERATED CODE *
    *****************/
    update: (params:UpdateProjectV2ItemFieldValueInput, output:typeof UpdateProjectV2ItemFieldValueOutput) => string = (params:UpdateProjectV2ItemFieldValueInput, output:typeof UpdateProjectV2ItemFieldValueOutput) => gen(this, new updateTest(params, output));
}
