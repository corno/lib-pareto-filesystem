import * as pd from 'pareto-core-data'

import {
    typeReference,
    sdata,
    sfunc,
    builderReference,
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
            "Mkdir": sfunc(typeReference("fs", "AnnotatedMkdirError"), null, builderReference("common", "StringBuilder"), null),
            //"Rmdir": sfunc(typeReference("fs", "AnnotatedRmdirError"), null, builderReference("common", "StringBuilder"), null),
            "ReadDir": sfunc(typeReference("fs", "AnnotatedReadDirError"), null, builderReference("common", "StringBuilder"), null),
            "ReadFile": sfunc(typeReference("fs", "AnnotatedReadFileError"), null, builderReference("common", "StringBuilder"), null),
            "Unlink": sfunc(typeReference("fs", "AnnotatedUnlinkError"), null, builderReference("common", "StringBuilder"), null),
            "WriteFile": sfunc(typeReference("fs", "AnnotatedWriteFileError"), null, builderReference("common", "StringBuilder"), null),
        }),
    }]
}