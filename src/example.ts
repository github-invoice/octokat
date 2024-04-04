import { Octokat } from "./octokat";
import { UpdateProjectV2ItemFieldValueOutput } from "./output";

function main(){
    const ocktokat = new Octokat("token");
    let output = UpdateProjectV2ItemFieldValueOutput;
    output.id = true;
    // let output = ""
    let input:UpdateProjectV2ItemFieldValueInput= {
        projectId: "projectId",
        fieldId: "fieldId",
        itemId: "itemId",
        value: {
            singleSelectOptionId: 1
        }
    };
    ocktokat.octokatGraphql.update(input, output);
}

main();