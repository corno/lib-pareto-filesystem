import * as pd from 'pareto-core-data'

import {
    typeReference,
    sdata,
    sfunc,
    builderReference,
    imp,
    externalTypeReference,
    bldr,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
    }),
    'imports': d({
        "fs": imp({}),
    }),
    'types': d({
    }),
    'type': ['synchronous', {
        'builders': d({
        }),
        'functions': d({
            "Mkdir": sfunc(sdata(externalTypeReference("fs", "AnnotatedMkdirError")), bldr(builderReference("common", "String"))),
            //"Rmdir": sfunc(typeReference("fs", "AnnotatedRmdirError"), null, bldr(builderReference("common", "String"))),
            "ReadDir": sfunc(sdata(externalTypeReference("fs", "AnnotatedReadDirError")), bldr(builderReference("common", "String"))),
            "ReadFile": sfunc(sdata(externalTypeReference("fs", "AnnotatedReadFileError")), bldr(builderReference("common", "String"))),
            "Unlink": sfunc(sdata(externalTypeReference("fs", "AnnotatedUnlinkError")), bldr(builderReference("common", "String"))),
            "WriteFile": sfunc(sdata(externalTypeReference("fs", "AnnotatedWriteFileError")), bldr(builderReference("common", "String"))),
        }),
    }]
}