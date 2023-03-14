import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "mkdir": algorithm(functionReference("this", {}, "Mkdir")),
        "readDir": algorithm(functionReference("this", {}, "ReadDir")),
        "readFile": algorithm(functionReference("this", {}, "ReadFile")),
        //"rmdir": algorithm(functionReference("this", {}, "Rmdir")),
        "unlink": algorithm(functionReference("this", {}, "Unlink")),
        "writeFile": algorithm(functionReference("this", {}, "WriteFile")),
    }),
}