import * as pd from 'pareto-core-data'

import { afunction, algorithm, aSideEffect, constructor, dependent } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createReadOptionalDirectory": algorithm(afunction("main", {}, "ReadOptionalDirectory"), {}, dependent(null, {}, {
            "onError": aSideEffect("common", {}, "String"),
        })),
        "createReadDirectoryOrAbort": algorithm(afunction("main", {}, "ReadDirectoryOrAbort"), {}, dependent(null, {}, {
            "onError": aSideEffect("common", {}, "String"),
        })),
        "createUnlinkFireAndForget": algorithm(constructor("this", {}, "CreateUnlinkFireAndForget"), {}, dependent(null, {}, {})),
        "createWriteFileFireAndForget": algorithm(constructor("this", {}, "CreateWriteFileFireAndForget"), {}, dependent(null, {}, {})),

    }),
}