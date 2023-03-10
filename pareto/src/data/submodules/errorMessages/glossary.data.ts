import * as pd from 'pareto-core-data'

import {
    typeReference,
    sdata,
    sfunc,
    type,
    glossaryParameter,
    parametrizedTypeReference,
    parametrizedBuilderReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
    }),
    'types': d({
    }),
    'type': ['synchronous', {
        'builders': d({
        }),
        'functions': d({
            "CreateMkdirErrorMessage": sfunc(typeReference("fs", "MkdirError"), null, null, sdata(typeReference("common", "String"))),
            "CreateRmdirErrorMessage": sfunc(typeReference("fs", "RmdirError"), null, null, sdata(typeReference("common", "String"))),
            "CreateReadDirErrorMessage": sfunc(typeReference("fs", "ReadDirError"), null, null, sdata(typeReference("common", "String"))),
            "CreateReadFileErrorMessage": sfunc(typeReference("fs", "ReadFileError"), null, null, sdata(typeReference("common", "String"))),
            "CreateUnlinkErrorMessage": sfunc(typeReference("fs", "UnlinkError"), null, null, sdata(typeReference("common", "String"))),
            "CreateWriteFileErrorMessage": sfunc(typeReference("fs", "WriteFileError"), null, null, sdata(typeReference("common", "String"))),
        }),

    }]
}