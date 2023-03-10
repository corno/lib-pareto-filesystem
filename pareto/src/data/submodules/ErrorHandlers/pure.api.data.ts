import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "mkdir": algorithm(functionReference("this", {}, "Mkdir")),
        "readDir": algorithm(functionReference("this", {}, "ReadDir")),
        "readFile": algorithm(functionReference("this", {}, "ReadFile")),
        //"rmdir": algorithm(functionReference("this", {}, "Rmdir")),
        "unlink": algorithm(functionReference("this", {}, "Unlink")),
        "writeFile": algorithm(functionReference("this", {}, "WriteFile")),
    }),
}