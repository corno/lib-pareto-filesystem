import * as pd from 'pareto-core-data'

import {
    string, member, group,
    typeReference,
    boolean,
    type,
    optional,
    sfunc,
    builderMethod,
    builderReference,
    ref,
    externalTypeReference,
    imp,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
        "fs": imp({}),
    }),
    'types': d({
        "ReadOptionalDirectoryResult": type(optional(ref(externalTypeReference("fs", "ReadDirectory_Success")))),
        "ReadOptionalDirectoryData": type(group({
            "fs": member(ref(externalTypeReference("fs", "ReadDirectory_Data"))),
            "allow": member(group({
                "noEntity": member(boolean()),
                "isNotADirectory": member(boolean()),
            })),
        })),
        "WriteFileData": type(group({
            "settings": member(ref(externalTypeReference("fs", "WriteFileData"))),
            "data": member(string()),
        }))
    }),
    'type': ['synchronous', {
        'builders': d({
            "UnlinkFireAndForget": builderMethod(externalTypeReference("fs", "Unlink_Data"), null),
            "WriteFile": builderMethod(typeReference("WriteFileData"), null),


            "HandleAnnotatedUnlinkError": builderMethod(externalTypeReference("fs", "AnnotatedUnlinkError"), null),
            "HandleAnnotatedWriteFileError": builderMethod(externalTypeReference("fs", "AnnotatedWriteFileError"), null),
        }),
        'functions': d<g_glossary.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation>>({}),

    }],
}