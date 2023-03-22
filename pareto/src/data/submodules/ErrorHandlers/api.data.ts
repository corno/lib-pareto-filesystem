import * as pd from 'pareto-core-data'

import { constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "mkdir": algorithm(constructor("this", {}, "Mkdir")),
        "readDir": algorithm(constructor("this", {}, "ReadDir")),
        "readFile": algorithm(constructor("this", {}, "ReadFile")),
        //"rmdir": algorithm(functionReference("this", {}, "Rmdir")),
        "unlink": algorithm(constructor("this", {}, "Unlink")),
        "writeFile": algorithm(constructor("this", {}, "WriteFile")),
    }),
}