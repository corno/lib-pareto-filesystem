import * as pd from 'pareto-core-data'

import { algorithm, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "mkdir": algorithm(sfunction("this", {}, "Mkdir")),
        "readDir": algorithm(sfunction("this", {}, "ReadDir")),
        "readFile": algorithm(sfunction("this", {}, "ReadFile")),
        "rmdir": algorithm(sfunction("this", {}, "Rmdir")),
        "unlink": algorithm(sfunction("this", {}, "Unlink")),
        "writeFile": algorithm(sfunction("this", {}, "WriteFile")),
    }),
}