import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference, infRef, bldrRef } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createUnlinkFireAndForget": algorithm(bldrRef("this", {}, "UnlinkFireAndForget"), constructor(null, {
            "onError": bldrRef("this", {}, "HandleAnnotatedUnlinkError"),
            "unlink": functionReference("fs", {}, "Unlink"),
        })),
        "createWriteFileFireAndForget": algorithm(bldrRef("this", {}, "WriteFile"), constructor(null, {
            "createFileWriter": functionReference("fs", {}, "CreateFileWriter"),
            "onError": bldrRef("this", {}, "HandleAnnotatedWriteFileError"),
        })),

    }),
}