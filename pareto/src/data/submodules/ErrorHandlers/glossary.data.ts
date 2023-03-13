import * as pd from 'pareto-core-data'

import {
    typeReference,
    sdata,
    sfunc,
    builderReference,
    imp,
    externalTypeReference,
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
            "Mkdir": sfunc(externalTypeReference("fs", "AnnotatedMkdirError"), null, builderReference("common", "String"), null),
            //"Rmdir": sfunc(typeReference("fs", "AnnotatedRmdirError"), null, builderReference("common", "String"), null),
            "ReadDir": sfunc(externalTypeReference("fs", "AnnotatedReadDirError"), null, builderReference("common", "String"), null),
            "ReadFile": sfunc(externalTypeReference("fs", "AnnotatedReadFileError"), null, builderReference("common", "String"), null),
            "Unlink": sfunc(externalTypeReference("fs", "AnnotatedUnlinkError"), null, builderReference("common", "String"), null),
            "WriteFile": sfunc(externalTypeReference("fs", "AnnotatedWriteFileError"), null, builderReference("common", "String"), null),
        }),
    }]
}