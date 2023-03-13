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
    reference,
    number,
    interfaceMethod,
    interfaceReference,
    inf,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'types': d({
        "ReadOptionalDirectoryResult": type(optional(reference("fs", "ReadDirectory_Success"))),
        "ReadOptionalDirectoryData": type(group({
            "fs": member(reference("fs", "ReadDirectory_Data")),
            "allow": member(group({
                "noEntity": member(boolean()),
                "isNotADirectory": member(boolean()),
            })),
        })),
        "WriteFileData": type(group({
            "settings": member(reference("fs", "WriteFileData")),
            "data": member(string()),
        }))
    }),
    'type': ['asynchronous', {
        'interfaces': d({
            "HandleAnnotatedReadDirError": interfaceMethod(typeReference("fs", "AnnotatedReadDirError"), null),
            "HandleAnnotatedUnlinkError": interfaceMethod(typeReference("fs", "AnnotatedUnlinkError"), null),
            "HandleAnnotatedWriteFileError": interfaceMethod(typeReference("fs", "AnnotatedWriteFileError"), null),
        }),
        'functions': d({
            "TempHandleAnnotatedReadDirError": afunc(typeReference("common", "Null"), null, inf(interfaceReference("HandleAnnotatedReadDirError"))),
            "TempHandleAnnotatedUnlinkError": afunc(typeReference("common", "Null"), null, inf(interfaceReference("HandleAnnotatedUnlinkError"))),
            "TempHandleAnnotatedWriteFileError": afunc(typeReference("common", "Null"), null, inf(interfaceReference("HandleAnnotatedWriteFileError"))),

            "ReadFileOrAbort": afunc(typeReference("fs", "ReadFile_Data"), null, adata(typeReference("common", "String"))),
            "ReadDirectoryOrAbort": afunc(typeReference("fs", "ReadDirectory_Data"), null, adata(typeReference("fs", "ReadDirectory_Success"))),
            "ReadOptionalDirectory": afunc(typeReference("ReadOptionalDirectoryData"), null, adata(typeReference("ReadOptionalDirectoryResult"))),

        }),

    }],
}