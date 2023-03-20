import * as pd from 'pareto-core-data'

import { aconstructor, afunction, algorithm, aSideEffect, dependent } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createUnlinkFireAndForget": algorithm(aconstructor("this", {}, "UnlinkFireAndForget"), dependent(null, {
            "unlink": afunction("fs", {}, "Unlink"),
        }, {
            "onError": aSideEffect("this", {}, "HandleAnnotatedUnlinkError"),
        })),
        "createWriteFileFireAndForget": algorithm(aconstructor("this", {}, "WriteFile"), dependent(null, {
            "createFileWriter": afunction("fs", {}, "CreateFileWriter"),
        }, {
            "onError": aSideEffect("this", {}, "HandleAnnotatedWriteFileError"),
        })),
    }),
}