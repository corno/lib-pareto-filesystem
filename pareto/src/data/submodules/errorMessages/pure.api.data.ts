import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({

        "createMkdirErrorMessage": algorithm(functionReference("this", {}, "CreateMkdirErrorMessage")),

        "createReadDirErrorMessage": algorithm(functionReference("this", {}, "CreateReadDirErrorMessage")),
        "createReadFileErrorMessage": algorithm(functionReference("this", {}, "CreateReadFileErrorMessage")),

        "createRmdirErrorMessage": algorithm(functionReference("this", {}, "CreateRmdirErrorMessage")),
        "createUnlinkErrorMessage": algorithm(functionReference("this", {}, "CreateUnlinkErrorMessage")),

        "createWriteFileErrorMessage": algorithm(functionReference("this", {}, "CreateWriteFileErrorMessage")),

    }),
}