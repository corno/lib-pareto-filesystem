import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createUnlinkFireAndForget": algorithm(functionReference("this", {}, "TempUnlinkFireAndForget"), constructor(null, {
            "temp_onError": functionReference("this", {}, "TempHandleAnnotatedUnlinkError"),// should be a builder
            "unlink": functionReference("fs", {}, "Unlink"),
        })),
        "createWriteFileFireAndForget": algorithm(functionReference("this", {}, "TempWriteFile"), constructor(null, {
            "createFileWriter": functionReference("fs", {}, "CreateFileWriter"),
            "temp_onError": functionReference("this", {}, "TempHandleAnnotatedWriteFileError"), // should be a builder
        })),

    }),
}