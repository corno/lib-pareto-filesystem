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
            "Mkdir": sfunc(sdata(externalTypeReference("fs", "MkdirError")), sdata(externalTypeReference("common", "String"))),
            "Rmdir": sfunc(sdata(externalTypeReference("fs", "RmdirError")), sdata(externalTypeReference("common", "String"))),
            "ReadDir": sfunc(sdata(externalTypeReference("fs", "ReadDirError")), sdata(externalTypeReference("common", "String"))),
            "ReadFile": sfunc(sdata(externalTypeReference("fs", "ReadFileError")), sdata(externalTypeReference("common", "String"))),
            "Unlink": sfunc(sdata(externalTypeReference("fs", "UnlinkError")), sdata(externalTypeReference("common", "String"))),
            "WriteFile": sfunc(sdata(externalTypeReference("fs", "WriteFileError")), sdata(externalTypeReference("common", "String"))),
        }),

    }]
}