import * as pd from 'pareto-core-data'

import {
    string, member, group,
    typeReference,
    boolean,
    type,
    optional,
    ref,
    externalTypeReference,
    imp,
    aInterfaceMethod,
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
    'asynchronous': {
        'interfaces': d({
            "UnlinkFireAndForget": aInterfaceMethod(externalTypeReference("fs", "Unlink_Data"), null),
            "WriteFile": aInterfaceMethod(typeReference("WriteFileData"), null),


            "HandleAnnotatedUnlinkError": aInterfaceMethod(externalTypeReference("fs", "AnnotatedUnlinkError"), null),
            "HandleAnnotatedWriteFileError": aInterfaceMethod(externalTypeReference("fs", "AnnotatedWriteFileError"), null),
        }),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}