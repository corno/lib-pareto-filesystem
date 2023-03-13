import * as pd from 'pareto-core-data'

import {
    typeReference,
    sdata,
    sfunc,
    externalTypeReference,
    imp,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
    }),
    'imports': d({
        "common": imp({}),
        "fs": imp({}),
    }),
    'types': d({
    }),
    'type': ['synchronous', {
        'builders': d({
        }),
        'functions': d({
            "Mkdir": sfunc(externalTypeReference("fs", "MkdirError"), null, null, sdata(externalTypeReference("common", "String"))),
            "Rmdir": sfunc(externalTypeReference("fs", "RmdirError"), null, null, sdata(externalTypeReference("common", "String"))),
            "ReadDir": sfunc(externalTypeReference("fs", "ReadDirError"), null, null, sdata(externalTypeReference("common", "String"))),
            "ReadFile": sfunc(externalTypeReference("fs", "ReadFileError"), null, null, sdata(externalTypeReference("common", "String"))),
            "Unlink": sfunc(externalTypeReference("fs", "UnlinkError"), null, null, sdata(externalTypeReference("common", "String"))),
            "WriteFile": sfunc(externalTypeReference("fs", "WriteFileError"), null, null, sdata(externalTypeReference("common", "String"))),
        }),

    }]
}