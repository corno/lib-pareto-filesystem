import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    adata,
    boolean,
    afunc,
    type,
    optional,
    number,
    interfaceMethod,
    interfaceReference,
    inf,
    ref,
    externalTypeReference,
    imp,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "fs": imp({}),
        "common": imp({}),
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
    'type': ['asynchronous', {
        'interfaces': d({
            "HandleAnnotatedReadDirError": interfaceMethod(externalTypeReference("fs", "AnnotatedReadDirError"), null),
            "HandleAnnotatedUnlinkError": interfaceMethod(externalTypeReference("fs", "AnnotatedUnlinkError"), null),
            "HandleAnnotatedWriteFileError": interfaceMethod(externalTypeReference("fs", "AnnotatedWriteFileError"), null),
        }),
        'functions': d({
            "TempHandleAnnotatedReadDirError": afunc(externalTypeReference("common", "Null"), null, inf(interfaceReference("HandleAnnotatedReadDirError"))),
            "TempHandleAnnotatedUnlinkError": afunc(externalTypeReference("common", "Null"), null, inf(interfaceReference("HandleAnnotatedUnlinkError"))),
            "TempHandleAnnotatedWriteFileError": afunc(externalTypeReference("common", "Null"), null, inf(interfaceReference("HandleAnnotatedWriteFileError"))),

            "ReadFileOrAbort": afunc(externalTypeReference("fs", "ReadFile_Data"), null, adata(externalTypeReference("common", "String"))),
            "ReadDirectoryOrAbort": afunc(externalTypeReference("fs", "ReadDirectory_Data"), null, adata(externalTypeReference("fs", "ReadDirectory_Success"))),
            "ReadOptionalDirectory": afunc(typeReference("ReadOptionalDirectoryData"), null, adata(typeReference("ReadOptionalDirectoryResult"))),

        }),

    }],
}