"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const octokat_1 = require("./octokat");
const output_1 = require("./output");
function main() {
    const ocktokat = new octokat_1.Octokat("token");
    let output = output_1.UpdateProjectV2ItemFieldValueOutput;
    output.id = true;
    // let output = ""
    let input = {
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
