import * as pr from 'pareto-core-raw'

import {
    string,
    null_,
    reference,
    boolean,
    nested,
    typeReference, dictionary, group, member, taggedUnion, types, func, data, type, optional,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary


export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            "fs": "res-pareto-filesystem",
            "common": "glo-pareto-common",
        }),
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
                }))
            })),
            "ReadOptionalDirectoryData": type(group({
                "fs": member(reference("fs", "ReadDirectory_Data")),
                "allow": member(group({
                    "noEntity": member(boolean(), true),
                    "isNotADirectory": member(boolean(), true),
                })),
            })),
        }),
        'interfaces': d({}),
        'functions': d({
            "CreateMkdirErrorMessage": func(typeReference("fs", "MkdirError"), null, null, data(typeReference("common", "String"), false)),
            "CreateRmdirErrorMessage": func(typeReference("fs", "RmdirError"), null, null, data(typeReference("common", "String"), false)),
            "CreateReadDirErrorMessage": func(typeReference("fs", "ReadDirError"), null, null, data(typeReference("common", "String"), false)),
            "CreateReadFileErrorMessage": func(typeReference("fs", "ReadFileError"), null, null, data(typeReference("common", "String"), false)),
            "CreateUnlinkErrorMessage": func(typeReference("fs", "UnlinkError"), null, null, data(typeReference("common", "String"), false)),
            "CreateWriteFileErrorMessage": func(typeReference("fs", "UnlinkError"), null, null, data(typeReference("common", "String"), false)),

            "HandleAnnotatedReadDirError": func(typeReference("fs", "AnnotatedReadDirError"), null, null, null),
            "HandleAnnotatedUnlinkError": func(typeReference("fs", "AnnotatedUnlinkError"), null, null, null),

            "ReadFileOrAbort": func(typeReference("fs", "ReadFile_Data"), null, null, data(typeReference("common", "String"), true)),
            "ReadDirectoryOrAbort": func(typeReference("fs", "ReadDirectory_Data"), null, null, data(typeReference("ReadDirectoryResult"), true)),
            "ReadOptionalDirectory": func(typeReference("ReadOptionalDirectoryData"), null, null, data(typeReference("ReadOptionalDirectoryResult"), true)),

            "UnlinkFireAndForget": func(typeReference("fs", "Unlink_Data"), null, null, null),
            "WriteFile": func(typeReference("fs", "WriteFileData"), null, null, null),
        }),
    },
    'api': {
        'imports': d({
            "fs": "res-pareto-filesystem",
        }),
        'algorithms': d({
            "createMkdirErrorMessage": algorithm(definitionReference("CreateMkdirErrorMessage")),
            "createReadDirectoryOrAbort": algorithm(definitionReference("ReadDirectoryOrAbort"), constructor(null, {
                "onError": definitionReference("HandleAnnotatedReadDirError"),
                "readDirectory": definitionReference("fs", {}, "ReadDirectory"),
            })),
            "createReadDirErrorMessage": algorithm(definitionReference("CreateReadDirErrorMessage")),
            "createReadFileErrorMessage": algorithm(definitionReference("CreateReadFileErrorMessage")),
            // "createReadFileOrAbort": ['foo', {
            //     data: ['null', null],
            //     dependencies: d({
            //         "onError": {
            //             type: ['procedure', externalReference("fs", "AnnotatedFSError<mfs.TReadFileError>")],

            //         },
            //     }),
            //     result: {
            //         type: ['function', {
            //             function: "ReadFileOrAbort",
            //             async: true,
            //         }],
            //     }
            // }],
            "createReadOptionalDirectory": algorithm(definitionReference("ReadOptionalDirectory"), constructor(null, {
                "onError": definitionReference("HandleAnnotatedReadDirError"),
                "readDirectory": definitionReference("fs", {}, "ReadDirectory"),
            })),
            // "createReadOptionalFile": ['algorithm', {
            //     type: ['function', {
            //         'function': "XX"
            //     }],
            // }],
            "createRmdirErrorMessage": algorithm(definitionReference("CreateRmdirErrorMessage")),
            "createUnlinkErrorMessage": algorithm(definitionReference("CreateUnlinkErrorMessage")),
            "createUnlinkFireAndForget": algorithm(definitionReference("UnlinkFireAndForget"), constructor(null, {
                "onError": definitionReference("HandleAnnotatedUnlinkError"),
                "unlink": definitionReference("fs", {}, "Unlink"),
            })),
            "createWriteFileErrorMessage": algorithm(definitionReference("CreateWriteFileErrorMessage")),
            "createWriteFileFireAndForget": algorithm(definitionReference("WriteFile"), constructor(null, {
                "createWriteStream": definitionReference("fs", {}, "CreateWriteStream"),
            })),

        })
    },
}