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
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
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
        'interfaces': d({}),
        'functions': d({
            "HandleAnnotatedReadDirError": afunc(typeReference("fs", "AnnotatedReadDirError"), null, null),
            "HandleAnnotatedUnlinkError": afunc(typeReference("fs", "AnnotatedUnlinkError"), null, null),
            "HandleAnnotatedWriteFileError": afunc(typeReference("fs", "AnnotatedWriteFileError"), null, null),

            "ReadFileOrAbort": afunc(typeReference("fs", "ReadFile_Data"), null, adata(typeReference("common", "String"))),
            "ReadDirectoryOrAbort": afunc(typeReference("fs", "ReadDirectory_Data"), null, adata(typeReference("fs", "ReadDirectory_Success"))),
            "ReadOptionalDirectory": afunc(typeReference("ReadOptionalDirectoryData"), null, adata(typeReference("ReadOptionalDirectoryResult"))),

            "UnlinkFireAndForget": afunc(typeReference("fs", "Unlink_Data"), null, null),
            "WriteFile": afunc(typeReference("WriteFileData"), null, null),
        }),

    }],
}