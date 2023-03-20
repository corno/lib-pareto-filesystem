import * as pd from 'pareto-core-data'

import { algorithm, aconstructor } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "mkdir": algorithm(aconstructor("this", {}, "Mkdir")),
        "readDir": algorithm(aconstructor("this", {}, "ReadDir")),
        "readFile": algorithm(aconstructor("this", {}, "ReadFile")),
        "rmdir": algorithm(aconstructor("this", {}, "Rmdir")),
        "unlink": algorithm(aconstructor("this", {}, "Unlink")),
        "writeFile": algorithm(aconstructor("this", {}, "WriteFile")),
    }),
}