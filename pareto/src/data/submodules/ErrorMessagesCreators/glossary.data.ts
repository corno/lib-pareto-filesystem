import * as pd from 'pareto-core-data'

import {
    typeReference,
    sdata,
    sfunc,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
    }),
    'types': d({
    }),
    'type': ['synchronous', {
        'builders': d({
        }),
        'functions': d({
            "Mkdir": sfunc(typeReference("fs", "MkdirError"), null, null, sdata(typeReference("common", "String"))),
            "Rmdir": sfunc(typeReference("fs", "RmdirError"), null, null, sdata(typeReference("common", "String"))),
            "ReadDir": sfunc(typeReference("fs", "ReadDirError"), null, null, sdata(typeReference("common", "String"))),
            "ReadFile": sfunc(typeReference("fs", "ReadFileError"), null, null, sdata(typeReference("common", "String"))),
            "Unlink": sfunc(typeReference("fs", "UnlinkError"), null, null, sdata(typeReference("common", "String"))),
            "WriteFile": sfunc(typeReference("fs", "WriteFileError"), null, null, sdata(typeReference("common", "String"))),
        }),

    }]
}