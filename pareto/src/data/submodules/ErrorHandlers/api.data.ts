import * as pd from 'pareto-core-data'

import { afunction, algorithm } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "mkdir": algorithm(afunction("this", {}, "Mkdir")),
        "readDir": algorithm(afunction("this", {}, "ReadDir")),
        "readFile": algorithm(afunction("this", {}, "ReadFile")),
        //"rmdir": algorithm(functionReference("this", {}, "Rmdir")),
        "unlink": algorithm(afunction("this", {}, "Unlink")),
        "writeFile": algorithm(afunction("this", {}, "WriteFile")),
    }),
}