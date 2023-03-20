import * as pd from 'pareto-core-data'

import {
    data,
    imp,
    externalTypeReference,
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
    'asynchronous': {
        'interfaces': d({
            // "Mkdir": ainterface(data(externalTypeReference("fs", "AnnotatedMkdirError")), bldr(builderReference("common", "String"))),
            // //"Rmdir": sfunction(typeReference("fs", "AnnotatedRmdirError"), null, bldr(builderReference("common", "String"))),
            // "ReadDir": sfunction(bldr(builderReference("common", "String")), data(externalTypeReference("fs", "AnnotatedReadDirError"))),
            // "ReadFile": sfunction(bldr(builderReference("common", "String")), data(externalTypeReference("fs", "AnnotatedReadFileError"))),
            // "Unlink": sfunction(bldr(builderReference("common", "String")), data(externalTypeReference("fs", "AnnotatedUnlinkError"))),
            // "WriteFile": sfunction(bldr(builderReference("common", "String")), data(externalTypeReference("fs", "AnnotatedWriteFileError"))),
        }),
        'algorithms': d({}),
        
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
        
    },

}