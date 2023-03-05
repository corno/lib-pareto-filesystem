import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    boolean,
    func,
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
        "ReadDirectoryResult": type(dictionary(reference("DirNodeData"))),
        "ReadOptionalDirectoryResult": type(optional(reference("ReadDirectoryResult"))),
        "DirNodeData": type( group({
            "path": member(string()),
            "type": member(taggedUnion({
                "directory": null_(),
                "file": null_(),
                "unknown": null_(),
            })),
        })),
        "ReadOptionalDirectoryData": type(group({
            "fs": member(reference("fs", "ReadDirectory_Data")),
            "allow": member(group({
                "noEntity": member(boolean()),
                "isNotADirectory": member(boolean()),
            })),
        })),
    }),
    'builders': d({}),
    'interfaces': d({}),
    'functions': d({
        "CreateMkdirErrorMessage": func(typeReference("fs", "MkdirError"), null, null, data(typeReference("common", "String"), false)),
        "CreateRmdirErrorMessage": func(typeReference("fs", "RmdirError"), null, null, data(typeReference("common", "String"), false)),
        "CreateReadDirErrorMessage": func(typeReference("fs", "ReadDirError"), null, null, data(typeReference("common", "String"), false)),
        "CreateReadFileErrorMessage": func(typeReference("fs", "ReadFileError"), null, null, data(typeReference("common", "String"), false)),
        "CreateUnlinkErrorMessage": func(typeReference("fs", "UnlinkError"), null, null, data(typeReference("common", "String"), false)),
        "CreateWriteFileErrorMessage": func(typeReference("fs", "WriteFileError"), null, null, data(typeReference("common", "String"), false)),

        "HandleAnnotatedReadDirError": func(typeReference("fs", "AnnotatedReadDirError"), null, null, null),
        "HandleAnnotatedUnlinkError": func(typeReference("fs", "AnnotatedUnlinkError"), null, null, null),

        "ReadFileOrAbort": func(typeReference("fs", "ReadFile_Data"), null, null, data(typeReference("common", "String"), true)),
        "ReadDirectoryOrAbort": func(typeReference("fs", "ReadDirectory_Data"), null, null, data(typeReference("ReadDirectoryResult"), true)),
        "ReadOptionalDirectory": func(typeReference("ReadOptionalDirectoryData"), null, null, data(typeReference("ReadOptionalDirectoryResult"), true)),

        "UnlinkFireAndForget": func(typeReference("fs", "Unlink_Data"), null, null, null),
        "WriteFile": func(typeReference("fs", "WriteFileData"), null, null, null),
    }),
}